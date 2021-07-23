import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    component: () => import('../views/Front.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/Index.vue')
      },
      {
        path: 'products',
        component: () => import('../views/Products.vue')
      },
      {
        path: 'product/:id',
        component: () => import('../views/Product.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/Cart.vue')
      },
      {
        path: 'favorite',
        component: () => import('../views/Favorite.vue')
      },
      {
        path: 'checkout',
        component: () => import('../views/Checkout.vue')
      },
      {
        path: 'order/:id',
        component: () => import('../views/Order.vue')
      },
      {
        path: 'question',
        component: () => import('../views/Question.vue')
      },
      {
        path: 'about',
        component: () => import('../views/About.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/admin',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/admin/Products.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/admin/Coupon.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
