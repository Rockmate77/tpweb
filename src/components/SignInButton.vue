<template>
  <BaseButton :disabled="this.loging" @click="this.signIn()" class="navbar-brand">{{text}}</BaseButton>
</template>
<script>
import BaseButton from "@/components/BaseButton.vue";
import {getLastUser, signInAndGetUser} from "@/lib/microsoftGraph";
export default {
  name:"SignInButton",
  methods: {
    async signIn() {
      if(this.user==null) {
        this.loging = true;
        if (await signInAndGetUser()) {
          this.loging = false
          this.user = getLastUser();
          this.text = 'Signed in as ' + this.user.name;
          this.$emit('userChanged', this.user)
        }
      }
    }
  },
  components: {BaseButton},
  data() {
    return {
      loging:false,
      user:null,
      text:'Not yet logged-in',
    }
  }
}
</script>