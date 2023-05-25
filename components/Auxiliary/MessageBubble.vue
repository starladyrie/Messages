<template>
  <div id="MessageBubble">
    <div :class="classWrapper(message)">
      <div :class="classMessage(message)">
        <div v-if="parsedMessage" :class="classMessageText(message)">
          <span v-html="parsedMessage ? parsedMessage : ''"></span>
        </div>
        <div v-else-if="message.file">
          <a :href="message.file" target="_blank">
            <img :src="message.file" class="message-file" />
          </a>
        </div>
      </div>
    </div>
    <span :class="classMessageTime(message)">
      {{ parseHours(message.sendAt) }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'MessageBubble',
  props: ['message'],

  computed: {
    parsedMessage() {
      return this.message.text
        ? this.message.text.replace('\n', '<br>')
        : undefined
    },
  },

  methods: {
    isAgent(message) {
      return message.senderType === 'agent'
    },

    classWrapper(message) {
      return this.isAgent(message) ? 'sender-wrapper' : 'receiver-wrapper'
    },

    classMessage(message) {
      return this.isAgent(message) ? 'message-sender' : 'message-receiver'
    },

    classMessageText(message) {
      return this.isAgent(message)
        ? 'message-sender-text'
        : 'message-receiver-text'
    },

    classMessageTime(message) {
      return this.isAgent(message)
        ? 'message-sender-time'
        : 'message-receiver-time'
    },

    parseHours(date) {
      return new Date(date).toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
      })
    },
  },
}
</script>

<style scoped>
div,
span {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.receiver-wrapper {
  max-width: 60%;
}

.sender-wrapper {
  padding: 3px 20px !important;
  margin-left: 40% !important;
  max-width: 60%;
}

.message-file {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 200px;
  max-height: 200px;
  margin: 0 auto;
  padding: 0;
  object-fit: cover;
}

li {
  list-style-type: none;
}
</style>
