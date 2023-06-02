import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductForm from '../components/ProductForm.vue'
import ProductList from '../components/ProductList.vue'


Vue.use(VueRouter);

const routes = [
    {
        path: '/add',
        name: 'ProductForm',
        component: ProductForm
    },
    {
        path: '/',
        name: 'ProductList',
        component: ProductList
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

