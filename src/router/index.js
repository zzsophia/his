import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
        {
            path: '/login',
            name: 'login',
            component:()=>import('../components/Login.vue')
        },
        {
        path: '/home',
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
                path: '/register',
                name: 'register',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: function () {
                    return import(/* webpackChunkName: "about" */ '../components/Register.vue')
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
                path: '/checkday',
                name: 'checkday',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: function () {
                    return import(/* webpackChunkName: "about" */ '../components/CheckDay.vue')
                }
            },
            {
                path: '/checkdayquery',
                name: 'checkdayquery',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: function () {
                    return import(/* webpackChunkName: "about" */ '../components/CheckdayQuery.vue')
                }
            },
            {
                path: '/dispensing',
                name: 'dispensing',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: function () {
                    return import(/* webpackChunkName: "about" */ '../components/Dispensing.vue')
                }
            },
            {
                path: '/returnMedicine',
                name: 'returnMedicine',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: function () {
                    return import(/* webpackChunkName: "about" */ '../components/ReturnMedicine.vue')
                }
            },
            {
                path: '/drugadministration',
                name: 'drugadministration',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: function () {
                    return import(/* webpackChunkName: "about" */ '../components/DrugAdministration.vue')
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
            {
                path: '/constantcategorymanagement',
                name: 'constantcategorymanagement',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: function () {
                    return import(/* webpackChunkName: "about" */ '../components/Constantcategorymanagement.vue')
                }
            },
            {
                path: '/officemanagement',
                name: 'officemanagement',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: function () {
                    return import(/* webpackChunkName: "about" */ '../components/OfficeManagement.vue')
                }
            },
            {
                path: '/usermanagement',
                name: 'usermanagement',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: function () {
                    return import(/* webpackChunkName: "about" */ '../components/UserManagement.vue')
                }
            },
            {
                path: '/registrationlevelmanagement',
                name: 'registrationlevelmanagement',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: function () {
                    return import(/* webpackChunkName: "about" */ '../components/Registrationlevelmanagement.vue')
                }
            },
            {
                path: '/settlementcategorymanagement',
                name: 'settlementcategorymanagement',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: function () {
                    return import(/* webpackChunkName: "about" */ '../components/Settlementcategorymanagement.vue')
                }
            },
            {
                path: '/diagnosticdirectorymanagement',
                name: 'diagnosticdirectorymanagement',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: function () {
                    return import(/* webpackChunkName: "about" */ '../components/Diagnosticdirectorymanagement.vue')
                }
            },
            {
                path: '/non_drugchargeprojectmanagement',
                name: 'non_drugchargeprojectmanagement',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: function () {
                    return import(/* webpackChunkName: "about" */ '../components/Non_drugchargeprojectmanagement.vue')
                }
            },
            {
                path: '/doctorschedulingmanagement',
                name: 'doctorschedulingmanagement',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: function () {
                    return import(/* webpackChunkName: "about" */ '../components/Doctorschedulingmanagement.vue')
                }
            }
        ]

    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
