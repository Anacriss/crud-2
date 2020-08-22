import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: () => import(/* webpackChunkName: "about" */ '../views/Inicio.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/lista',
    name: 'Lista',
    component: () => import(/* webpackChunkName: "editar" */ '../views/Acceso.vue')
  },
  {
    path: '/editar/:id',
    name: 'Editar',
    component: () => import(/* webpackChunkName: "editar" */ '../views/Editar.vue')
},
{
  path: '/agregar',
  name: 'Agragar',
  component: () => import(/* webpackChunkName: "editar" */ '../views/Agregar.vue')
},
{
  path: '/registro',
  name: 'Registro',
  component: () => import(/* webpackChunkName: "editar" */ '../views/Registro.vue')
},
{
  path: '/Acceso',
  name: 'Acceso',
  component: () => import(/* webpackChunkName: "editar" */ '../views/Acceso.vue')
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
