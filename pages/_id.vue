<template>
  <ChatPage v-if="hasData" :chat="chat" :messages="messages" />
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      chat: undefined,
      messages: [],
      interval: undefined,
    }
  },

  computed: {
    hasData() {
      return this.chat && this.messages.length > 0
    },
  },

  async created() {
    this.chat = await this.$axios.$get(`/huggy/chats/${this.id}`)
    this.initInterval()
  },

  beforeDestroy() {
    clearInterval(this.interval)
  },

  methods: {
    async getMessages() {
      const messages = await this.$axios.$get(
        `/huggy/chats/${this.id}/messages`
      )
      if (messages.length === this.messages.length) return
      this.messages = messages.sort(
        (a, b) => new Date(a.sendAt) - new Date(b.sendAt)
      )
      this.$axios.$put(`/huggy/chats/${this.id}/read`)
    },

    initInterval() {
      this.getMessages()
      this.interval = setInterval(() => {
        this.getMessages()
      }, 1000)
    },
  },
}
</script>
