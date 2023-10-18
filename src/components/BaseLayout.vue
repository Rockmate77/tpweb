<template>
  <div>
    <base-header ><sign-in-button/></base-header>
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
  components:{
    SignInButton,
    BaseFooter,
    BaseHeader
  }
}
</script>