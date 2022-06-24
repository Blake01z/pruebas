import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/layout'
  },
  {
    path: '',
    name: 'layout',
    component: () => import(/* webpackChunkName: "Layout" */ '../layouts/LayoutPrimary.vue'),
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
        props:(route) =>{
          const {id} = route.query
          return (id === undefined || id === '') ? {id:undefined} : {id:id}
        }
      },
      {
        path: 'preguntas',
        name: 'preguntas',
        component: () => import(/* webpackChunkName: "Preguntas" */ '../views/PreguntasFrecuentes.vue')
      },
      {
        path: 'Seleccionados',
        name: 'Seleccionados',
        component: () => import(/* webpackChunkName: "Seleccionados" */ '../views/Seleccionados.vue')
      },
      {
        path: 'confirmacion',
        name: 'confirmacion',
        component: () => import(/* webpackChunkName: "Seleccionados" */ '../views/Confirmacion.vue')
      },
      {
        path:'',
        redirect: {name: 'home'}
      },
      {
        path: '/:pathMatch(.*)*', 
        component: () =>  import(/*webpackChunkName: "NoFoudPage"*/ '../views/404.vue')
      },
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to,from,next) => {
  document.title = `Referidos - ${to.name}`
  next()
})

export default router
