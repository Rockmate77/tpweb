<template>
  <base-button
    :disabled="isPending"
    :color="color"
    v-on:click="handleClick"
  >
    <img v-if="isPending" src="../assets/loading.gif" style="height: 1%;width: 20%"/>
    <slot />
  </base-button>
</template>

<script>
import BaseButton from './BaseButton.vue'

export default {
  name: 'AsyncButton',
  components: { BaseButton },
  inheritAttrs: false,

  props: {
    color: {
      type: String,
      default: 'primary'
    },
  },

  data () {
    return {
      isPending: false,
      nbclicks: 0
    }
  },

  methods: {
    async handleClick () {
      if(this.isPending===false) {
        this.nbclicks=this.nbclicks+1;
        console.log("pending");
        this.isPending = true;
        await new Promise(resolve => setTimeout(resolve, 1000+this.nbclicks*1000));
        this.isPending=false;
        console.log("found")
      }
    }
  }
}
</script>