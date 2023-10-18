<template>
    <BaseLayout>
    <home-page />
    </BaseLayout>
</template>

<script>

import HomePage from "@/pages/HomePage.vue";
import BaseLayout from "@/components/BaseLayout.vue";
export default {
  name: 'App',
  components: {
    BaseLayout,
    HomePage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
