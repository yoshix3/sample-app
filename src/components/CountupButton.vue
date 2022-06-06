<template>
  <div>
    <button @click="countUp" :disabled="disabled">カウントアップ</button>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const disabled = computed(() => store.getters['counter/isLoading']);
console.log(disabled);
const countUp = () => store.dispatch('counter/incrementAsync', {ammount: 5});

</script>
<style></style>