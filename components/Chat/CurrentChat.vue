<template>
  <div id="CurrentChat">
    <div class="row message">
      <chat-messages :messages="messages" />
    </div>
  </div>
</template>

<script>
import ChatMessages from './ChatMessages'

export default {
  name: 'CurrentChat',
  components: { ChatMessages },
  props: ['messages'],

  watch: {
    messages() {
      this.scrollToBottom()
    },
  },

  mounted() {
    this.scrollToBottom()
  },

  methods: {
    scrollToBottom() {
      this.$nextTick(() => {
        window.scrollTo(0, document.body.scrollHeight)
      })
    },
  },
}
</script>

<style scoped>
@media screen and (max-width: 700px) {
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

  .message {
    padding: 0 !important;
    margin: 0 !important;
    background-size: cover;
    overflow-y: auto;
    border: 1px solid #f7f7f7;
    height: calc(100% - 140px);
  }
}
</style>
