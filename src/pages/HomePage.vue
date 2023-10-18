<template>
  <div style="height: 90vh">
    <p>Here Comes the content of the home page</p>
    <p v-if="user!=null">user: {{user.name}}</p>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  name: 'HomePage',
  setup() {
    const store = useStore();
    const user = computed(() => store.state.user);

    return {
      user,
    };
  },
}
</script>
