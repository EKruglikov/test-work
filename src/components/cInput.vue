<script setup>
import {defineModel} from "vue";
const modelVal = defineModel();

</script>
<template>
  <input type="text" class="gui-input" v-model="modelVal" v-bind="$attrs">
</template>