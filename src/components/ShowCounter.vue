<template>
  <div>カウント：{{ count }}</div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const count = computed(() => store.getters['counter/value']);
console.log(count);

</script>
<style></style>