import './assets/scss/main.scss';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './modules/Catalog';


const app = createApp(App)
app.use(createPinia())
app.use(router)

import {useCartStore} from "./stores/cart";
const cartStore = useCartStore();
cartStore.updateCart();

app.mount('#app')
