import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NestedComponent from '../views/NestedComponent.vue'
import ParentComponent from '../views/ParentComponent.vue'
import ParentComponent2 from '../views/ParentComponent2.vue'
import ParentComponent3 from '../views/ParentComponent3.vue'
import ParentComponent4 from '../views/ParentComponent4.vue'
import ParentComponent5 from '../views/ParentComponent5.vue'
import SlotModalLayout from '../views/SlotModalLayout.vue'

import ComputedExample from '../views/ComputedExample.vue'
import WatchExample from '../views/WatchExample.vue'

import PageSlotTitle from '../views/PageSlotTitle.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/nested',
    name: 'NestedComponent',
    component: NestedComponent
  },
  {
    path: '/compo01',
    name: 'Components 01',
    component: ParentComponent
  },
  {
    path: '/compo02',
    name: 'Components 02',
    component: ParentComponent2
  },
  {
    path: '/compo03',
    name: 'Components 03',
    component: ParentComponent3
  },
  {
    path: '/compo04',
    name: 'Components 04',
    component: ParentComponent4
  },
  {
    path: '/compo05',
    name: 'Components 05',
    component: ParentComponent5
  },
  {
    path: '/slot',
    name: 'SlotModalLayout',
    component: SlotModalLayout
  },
  {
    path: '/computed',
    name: 'ComputedExample',
    component: ComputedExample
  },
  {
    path: '/watch',
    name: 'WatchExample',
    component: WatchExample
  },
  {
    path: '/slot',
    name: 'PageSlotTitle',
    component: PageSlotTitle
  },
  {
    path: '/provide',
    name: 'Provide',
    component: '/provide',
    children: [
      {
        path: '/provide/inject',
        name: 'ProvideInject',
        component: '/provide/provideInject'
      },
      {
        path: '/provide/injectChild',
        name: 'ProvideInjectChild',
        component: '/provide/provideInjectChild'
      }
    ]
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
