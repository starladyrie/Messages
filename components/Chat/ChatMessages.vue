<template>
  <ul>
    <div
      v-for="(message, index) in messages"
      :key="index"
      class="row message-body"
    >
      <message-bubble :message="message" />
    </div>
  </ul>
</template>

<script>
import MessageBubble from '~/components/Auxiliary/MessageBubble'

export default {
  name: 'ChatMessages',
  components: {
    MessageBubble,
  },
  props: ['messages'],
}
</script>

<style scoped>
ul {
  padding: 10px;
}

div,
span {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.row {
  padding: 0 !important;
  margin: 0 !important;
}
.message-body {
  margin: 0 !important;
  padding: 0 !important;
  width: auto;
  height: auto;
}
</style>
