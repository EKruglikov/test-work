<template>
  <div class="gui-basket">
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.75 10.3333V8.75C9.75 7.49022 10.2504 6.28204 11.1412 5.39124C12.032 4.50045 13.2402 4 14.5 4C15.7598 4 16.968 4.50045 17.8588 5.39124C18.7496 6.28204 19.25 7.49022 19.25 8.75V10.3333M6.79167 10.3333C6.5817 10.3333 6.38034 10.4167 6.23187 10.5652C6.08341 10.7137 6 10.915 6 11.125L5 21.8125C5 23.3088 6.27458 24.5833 7.77083 24.5833H21.2292C22.7254 24.5833 24 23.3706 24 21.8744L23 11.125C23 10.915 22.9166 10.7137 22.7681 10.5652C22.6197 10.4167 22.4183 10.3333 22.2083 10.3333H6.79167Z" stroke="#1F1F1F" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <div class="gui-basket__counter">{{ cartItemsCount }}</div>
  </div>
</template>

<script setup>
import {computed} from "vue";
import {useCartStore} from "../../stores/cart";

const cartStore = useCartStore();
const cartItemsCount = computed(() => cartStore.cart.length);
</script>