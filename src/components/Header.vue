<template>
  <header class="header">
    <div class="container">
      <div class="header__grid">
        <IconLogo />
        <nav class="nav header__nav">
          <ul class="nav__list">
            <li class="nav__item"><a href="#" class="nav__link is-active">Каталог</a></li>
            <li class="nav__item"><a href="#" class="nav__link">Доставка</a></li>
            <li class="nav__item"><a href="#" class="nav__link">Оплата</a></li>
            <li class="nav__item"><a href="#" class="nav__link">Контакты</a></li>
            <li class="nav__item"><a href="#" class="nav__link">О галерее</a></li>
          </ul>
        </nav>

        <div class="gui-search header__search">
          <cInput class="gui-search__field"
                  v-model="searchVal"
                  @change="searchProducts"
                  placeholder="Поиск по названию картины" />
          <button class="gui-button gui-search__button" @click.prevent="searchProducts">Найти</button>
        </div>

        <IconBasket class="header__basket"/>
      </div>
    </div>
  </header>
</template>

<script setup>
import IconLogo from '@/components/icons/IconLogo.vue';
import CInput from './cInput.vue';
import IconBasket from "./icons/IconBasket.vue";

import {ref} from "vue";
import {useProductsStore} from "../stores/products";

const productsStore = useProductsStore();
const searchVal = ref("");

function searchProducts() {
  productsStore.search(searchVal.value);
}
</script>