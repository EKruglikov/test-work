<template>
  <div class="card-item"
       :class="{'in-cart': inCart, 'is-none-product': item.newPrice === 0 }">
    <div class="card-item__image"><img :src="img" alt=""></div>
    <div class="card-item__content">
      <div class="card-item__title">{{ item.title }}</div>
      <div class="card-item__foot">
        <template v-if="item.newPrice !== 0">
          <div class="card-item__prices">
            <span class="card-item__prices-old">{{ item.oldPrice }} $</span>
            <span class="card-item__prices-new">{{ item.newPrice }} $</span>
          </div>
          <button class="gui-button card-item__buy"
                  :class="{'in-cart': inCart, 'is-loading': isLoading }"
                  @click.prevent="addToCart">
            <IconCheck v-if="inCart && !isLoading"/>
            {{ inCart ? 'В корзине' : 'Купить' }}
          </button>
        </template>
        <template v-else>
          <span>Продана на аукционе</span>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>

import {computed, ref} from "vue";
import {useCartStore} from "../stores/cart";
import IconCheck from "./icons/IconCheck.vue";

const cartStore = useCartStore();

const { item } = defineProps({
  item: { type: Object, default: () => ({}) }
});
const isLoading = ref(false);

const img = computed(() => new URL(item.image, import.meta.url));
const inCart = computed(() => !!cartStore.cart.find((it) => it.id === item.id));

function addToCart() {
  console.log(item);

  if(!inCart.value) {
    isLoading.value = true;
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => response.json())
        .then(() => {
          setTimeout(() => {
            isLoading.value = false;
            cartStore.addItem(item);
          }, 1000);
        })
        .catch((err) => {
          isLoading.value = false;
          console.log(err);
        });
  } else {
    removeFromCart();
  }
}
function removeFromCart() {
  isLoading.value = true;
  fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then(() => {
        setTimeout(() => {
          isLoading.value = false;
          cartStore.removeItem(item);
        }, 500);
      })
      .catch((err) => {
        isLoading.value = false;
        console.log(err);
      });
}
</script>