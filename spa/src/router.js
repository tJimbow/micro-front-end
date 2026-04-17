import { createRouter, createWebHistory } from 'vue-router';
import ProductListWrapper from './pages/ProductListWrapper.vue';
import AddProduct from './pages/AddProduct.vue';
import ProductDetail from './pages/ProductDetail.vue';
import Cart from './pages/Cart.vue';

const routes = [
  { path: '/', name: 'ProductList', component: ProductListWrapper },
  { path: '/add', name: 'AddProduct', component: AddProduct },
  { path: '/product/:id', name: 'ProductDetail', component: ProductDetail, props: true },
  { path: '/cart', name: 'Cart', component: Cart },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

