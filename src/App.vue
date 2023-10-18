<template>
    <BaseLayout @userChanged="uchanged">
    <home-page />
    </BaseLayout>
  <home-page />
</template>

<script>

import HomePage from "@/pages/HomePage.vue";
import BaseLayout from "@/components/BaseLayout.vue";
export default {
  name: 'App',
  components: {
    BaseLayout,
    HomePage
  },
  methods:{
    uchanged(data){
      this.user=data;
      this.$emit('userChanged',data);
    }
  },
  data() {
    return {
      user:null,
    }
  },
  provide() {
    return {
      user: this.user,
    };
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
