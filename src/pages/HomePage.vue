<template>
  <p>home page first</p>
  <p>home page</p>
  <p>home page</p>
  <p>home page</p>
  <p>home page</p>
  <p>home page</p>
  <p>home page</p>
  <div>
    <BaseButton/>
    <BaseButton style="margin-left: 10px" class="disabled"/>
  </div>
  <p>home page</p>
  <p>home page</p>
  <p>home page</p>
  <p>home page</p>
  <p>home page</p>
  <p>home page</p>
  <p>home page</p>
  <p>home page last</p>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";
export default {
  name: 'HomePage',
  components:{
    BaseButton
  }
}
</script>
