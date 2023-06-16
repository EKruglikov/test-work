<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <IconLogo fill="#403432"/>
        <nav class="nav footer__nav">
          <ul class="nav__list">
            <li class="nav__item"><a href="#" class="nav__link is-active">Каталог</a></li>
            <li class="nav__item"><a href="#" class="nav__link">Доставка</a></li>
            <li class="nav__item"><a href="#" class="nav__link">Оплата</a></li>
            <li class="nav__item"><a href="#" class="nav__link">Контакты</a></li>
            <li class="nav__item"><a href="#" class="nav__link">О галерее</a></li>
          </ul>
        </nav>

        <a href="tel:+7 (495) 999-99-99" class="footer__phone footer__contact"><IconPhone /> +7 (495) 999-99-99</a>
        <span class="footer__contact footer__location"><IconLocation /> г. Воронеж, ул. Никитина, 119А</span>

      </div>
    </div>
  </footer>
</template>

<script setup>
import IconLogo from "./icons/IconLogo.vue";
import IconPhone from "./icons/IconPhone.vue";
import IconLocation from "./icons/IconLocation.vue";
</script>
