import auth from '~/middleware/auth.js'
function page (path) {
  return () => import(/* webpackChunkName: '' */ `~/pages/${path}`).then(m => m.default || m)
}
function adminpage (path) {
  return () => import(/* webpacjChunkName: '' */ `~/admin/${path}`).then(m => m.default || m)
}

export default [

  { path: '/', name: 'home', rediredt: '/', component: page('jp/home_jp.vue') },

  // English Routes
  { path: '/en', name: 'en', component: page('en/home_en.vue') },
  { path: '/en/product', name: 'products_en', component: page('en/products_en.vue') },
  { path: '/en/product/IAS', name: 'ias_en', component: page('en/ias_en.vue') },
  { path: '/en/product/FlowCal', name: 'flowcal_en', component: page('en/flowcal_en.vue') },
  { path: '/en/catalog', name: 'catalog_en', component: page('en/catalog_en.vue') },
  { path: '/en/purchase', name: 'purchase_en', component: page('en/purchase_en.vue') },
  { path: '/en/carrer', name: 'carrer_en', component: page('en/carrer_en.vue') },
  { path: '/en/contact', name: 'contact_en', component: page('en/contact_en.vue') },
  { path: '/en/dealer', name: 'dealer_en', component: page('en/dealer_en.vue') },

  //information routes
  { path: '/en/informations', name: 'informations_en', component: page('en/informations_en.vue') },
  { path: '/en/information/detail', name: 'information_detail_en', component: page('en/information_detail_en.vue') },



  // Japanese Routes
  { path: '/', name: 'jp', component: page('jp/home_jp.vue') },
  { path: '/product', name: 'products_jp', component: page('jp/products_jp.vue') },
  { path: '/product/IAS', name: 'ias_jp', component: page('jp/ias_jp.vue') },
  { path: '/product/FlowCal', name: 'flowcal_jp', component: page('jp/flowcal_jp.vue') },
  { path: '/catalog', name: 'catalog_jp', component: page('jp/catalog_jp.vue') },
  { path: '/purchase', name: 'purchase_jp', component: page('jp/purchase_jp.vue') },
  { path: '/carrer', name: 'carrer_jp', component: page('jp/carrer_jp.vue') },
  { path: '/contact', name: 'contact_jp', component: page('jp/contact_jp.vue') },
  { path: '/dealer', name: 'dealer_jp', component: page('jp/dealer_jp.vue') },

  //information routes
  { path: '/informations', name: 'informations_jp', component: page('jp/informations_jp.vue') },
  { path: '/information/detail', name: 'information_detail_jp', component: page('jp/information_detail_jp.vue') },

  //Purchase routes
  { path: '/checkout', name: 'checkout', component: page('purchase/checkout.vue') },
  { path: '/agency/checkout', name: 'agency_checkout', component: page('purchase/agency_checkout.vue') },


  { path: '/login', name: 'login', component: page('auth/login.vue') },
  { path: '/register', name: 'register', component: page('auth/register.vue') },
  { path: '/register/customer', name: 'registerCustomer', component: page('auth/registerCustomer.vue') },
  { path: '/register/agency', name: 'registerAgency', component: page('auth/registerAgency.vue') },
  { path: '/password/reset', name: 'password.request', component: page('auth/password/email.vue') },
  { path: '/password/reset/:token', name: 'password.reset', component: page('auth/password/reset.vue') },
  { path: '/email/verify/:id', name: 'verification.verify', component: page('auth/verification/verify.vue') },
  { path: '/email/resend', name: 'verification.resend', component: page('auth/verification/resend.vue') },

  //Admin Dashboard
  { path: '/admin/dashboard', name: 'dashboard', component: adminpage('dashboard.vue'), meta: {requiresAuth: true} },
  { path: '/admin/users', name: 'admin.users', component: adminpage('user/index.vue'), meta: {middleware: auth} },
  { path: '/admin/user-profile/:id', name: 'user-profile', component: adminpage('user/profiles.vue'), meta: {middleware: auth}},
  { path: '/admin/applications', name: 'admin.applications', component: adminpage('Applications/index.vue'), meta: {middleware: auth} },
  { path: '/admin/application/update/:id', name: 'app-update', component: adminpage('Applications/update.vue'), meta: {middleware: auth} },
  { path: '/admin/application/create', name: 'admin.application.create', component: adminpage('Applications/Create.vue'), meta: {middleware: auth} },
  { path: '/admin/buttons', name: 'buttons', component: adminpage('buttons.vue'), meta: {middleware: auth} },
  { path: '/admin/cards', name: 'cards', component: adminpage('cards.vue'), meta: {middleware: auth} },
  { path: '/admin/tables', name: 'tables', component: adminpage('tables.vue'), meta: {middleware: auth} },
  
  {
    path: '/settings',
    component: page('settings/index.vue'),
    children: [
      { path: '', redirect: { name: 'settings.profile' } },
      { path: 'profile', name: 'settings.profile', component: page('settings/profile.vue') },
      { path: 'password', name: 'settings.password', component: page('settings/password.vue') }
    ]
  },

  { path: '*', component: page('errors/404.vue') }
]
