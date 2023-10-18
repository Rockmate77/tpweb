<template>
  <div>
    <base-header ><sign-in-button @userChanged="uchanged"/></base-header>
    <slot></slot>
    <base-footer />
  </div>
</template>
<script>

import BaseFooter from "@/components/base-footer.vue";
import BaseHeader from "@/components/base-header.vue";
import SignInButton from "@/components/SignInButton.vue";

export default {
  name: 'BaseLayout',
  inject: ['user'],
  components:{
    SignInButton,
    BaseFooter,
    BaseHeader
  },
  methods:{
    uchanged(data){
      this.$emit('userChanged',data)
    }
  },
}
</script>