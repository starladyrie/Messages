<template>
  <div id="chat-page">
    <chat-header class="heading" :chat="chat" />
    <current-chat class="chat" :messages="messages" />
    <chat-footer class="footer" />
  </div>
</template>

<script>
import ChatHeader from './Chat/ChatHeader.vue'
import CurrentChat from './Chat/CurrentChat.vue'
import ChatFooter from './Chat/ChatFooter.vue'

export default {
  components: { ChatHeader, CurrentChat, ChatFooter },
  props: ['chat', 'messages'],

  data() {
    return {
      sidebarOpen: false,
    }
  },
}
</script>

<style scoped>
.heading {
  position: fixed;
  top: 0;
  z-index: 100000;
}

.footer {
  position: fixed;
  bottom: 0;
  z-index: 100000;
}

.chat {
  margin-top: 70px;
  margin-bottom: 310px;
  overflow: hidden;
}

@media (max-width: 699px) {
  .chat {
    margin-bottom: 220px;
  }
}
</style>
