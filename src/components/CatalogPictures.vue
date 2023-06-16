<script setup>
import CardItem from "./CardItem.vue";
import {useProductsStore} from "../stores/products";

const products = useProductsStore();
</script>

<template>
  <div class="catalog-pictures">
    <CardItem v-for="item in products.items" :key="item.id" :item="item"/>
  </div>
</template>
