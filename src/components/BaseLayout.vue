<template>
  <div>
    <base-header />
    <slot></slot>
    <base-footer />
  </div>
</template>
<script>

import BaseFooter from "@/components/base-footer.vue";
import BaseHeader from "@/components/base-header.vue";

export default {
  name: 'BaseLayout',
  components:{
    BaseFooter,
    BaseHeader
  }
}
</script>