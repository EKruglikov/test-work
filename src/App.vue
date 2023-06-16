<script setup>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
</script>

<template>
  <div class="wrapper">
    <Header />

    <main>
      <RouterView />
    </main>

    <Footer />
  </div>

</template>

