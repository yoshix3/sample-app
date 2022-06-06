<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <CountupButton />
    <ShowCounter />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import CountupButton from '@/components/CountupButton.vue';
import ShowCounter from '@/components/ShowCounter.vue';

@Options({
  components: {
    HelloWorld,
    CountupButton,
    ShowCounter,
  },
})
export default class HomeView extends Vue {}
</script>
