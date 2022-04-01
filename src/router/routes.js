
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        path: '/about',
        component: () => import('pages/About.vue')
      },
      {
        path: '/membership',
        component: () => import('pages/Membership.vue')
      },
      {
        path: '/leadership',
        component: () => import('pages/Leadership.vue')
      },
      {
        path: '/partner',
        component: () => import('pages/Partner.vue')
      },
       {
        path: '/board',
        component: () => import('pages/Board.vue')
      },
      {
        path: '/news',
        component: () => import('pages/News.vue')
      },
      {
        path: '/contact',
        component: () => import('pages/Contact.vue')
      },
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
