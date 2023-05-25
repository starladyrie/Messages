<template>
  <div id="contactsList">
    <div class="row header">
      <div class="header-inner">
        <span class="header-span">Minhas Mensagens</span>
      </div>
    </div>
    <div class="row sidebar">
      <div class="divider"></div>
      <div v-for="(contact, index) in contacts" :key="index">
        <nuxt-link :to="`/${contact.id}`">
          <UserContact :contact="contact" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import UserContact from './IndividualContact'

export default {
  name: 'ContactList',
  components: { UserContact },

  data() {
    return {
      contacts: [],
      interval: undefined,
    }
  },

  mounted() {
    this.initInterval()
  },

  beforeDestroy() {
    clearInterval(this.interval)
  },

  methods: {
    async getChats() {
      const data = await this.$axios.$get('/huggy/chats')
      this.contacts = data
    },

    initInterval() {
      this.getChats()
      this.interval = setInterval(() => {
        this.getChats()
      }, 1000)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';

div,
span {
  height: fit-content;
  overflow: hidden;
  padding: 0;
  margin: 0;
}

.row {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
}

.header {
  padding: 0 !important;
  margin: 0 !important;
  height: 60px;
  width: 100%;
  background-color: #fff;
}

.header-inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 0 !important;
  margin: 0 !important;
}

.divider {
  height: 1.2px;
  width: 85%;
  margin-bottom: 1rem;
  background-color: #f7f7f7;
}

@media (max-width: 599px) {
  div,
  span {
    width: $nav-width-xs;
    height: fit-content;
    overflow: hidden;
    padding: 0;
    margin: 0;
  }
}

@media (min-width: 700px) {
  div,
  span {
    width: $nav-width-sm;
    height: fit-content;
    overflow: hidden;
    padding: 0;
    margin: 0;
  }
}

@media (min-width: 1200px) {
  div,
  span {
    width: $nav-width-base;
    height: fit-content;
    overflow: hidden;
    padding: 0;
    margin: 0;
  }
}
</style>
