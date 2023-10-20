<template>
  <div style="height: 92vh">
    <h2>Conversation Details</h2>
    <p>Conversation ID: {{ conversationId }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      conversationId: null,
    };
  },
  mounted() {
    this.conversationId = this.$route.params.id;
  },
};
</script>