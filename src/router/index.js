import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        children: [
            {
                path: '/withdraw_number',
                name: 'withdraw_number',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: function () {
                    return import(/* webpackChunkName: "about" */ '../views/Withdraw_number.vue')
                }
            },
            {
                path: '/charge',
                name: 'charge',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: function () {
                    return import(/* webpackChunkName: "about" */ '../views/Charge.vue')
                }
            }, {
                path: '/refund',
                name: 'refund',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: function () {
                    return import(/* webpackChunkName: "about" */ '../views/Refund.vue')
                }
            }, {
                path: '/invoice_replacement',
                name: 'invoice_replacement',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: function () {
                    return import(/* webpackChunkName: "about" */ '../views/Invoice_replacement.vue')
                }
            }, {
                path: '/invoice_replay',
                name: 'invoice_replay',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: function () {
                    return import(/* webpackChunkName: "about" */ '../views/Invoice_replay.vue')
                }
            }, {
                path: '/patient_fee_inquiry',
                name: 'patient_fee_inquiry',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: function () {
                    return import(/* webpackChunkName: "about" */ '../views/Patient_fee_inquiry.vue')
                }
            }, {
                path: '/about',
                name: 'about',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: function () {
                    return import(/* webpackChunkName: "about" */ '../views/About.vue')
                }
            },
            {
                path: '/patient_examination',
                name: 'patient_examination',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: function () {
                    return import(/* webpackChunkName: "about" */ '../views/Patient_examination.vue')
                }
            },
            {
                path: '/ows',
                name: 'ows',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: function () {
                    return import(/* webpackChunkName: "about" */ '../views/finance/Ows.vue')
                }
            },
            {
                path: '/bdws',
                name: 'bdws',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: function () {
                    return import(/* webpackChunkName: "about" */ '../views/finance/Bdws.vue')
                }
            },
            {
                path: '/edws',
                name: 'edws',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: function () {
                    return import(/* webpackChunkName: "about" */ '../views/finance/Edws.vue')
                }
            },
            {
                path: '/cam',
                name: 'cam',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: function () {
                    return import(/* webpackChunkName: "about" */ '../views/finance/Cam.vue')
                }
            },
        ]

    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
