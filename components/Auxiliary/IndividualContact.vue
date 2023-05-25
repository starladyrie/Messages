<template>
  <div id="UserContact">
    <div class="row sidebar-body" :class="{ active: isActive(contact.id) }">
      <div class="sidebar-avatar">
        <div class="avatar-icon">
          <img :src="contact.chatCustomer.photo" />
        </div>
      </div>
      <div class="row">
        <div class="sidebar-text">
          <div class="contact">
            <span class="contact-name">
              {{ contact.chatCustomer.name }}
            </span>
            <span v-if="contact.unread" class="contact-unread">
              {{ contact.unread }}
            </span>
          </div>
          <span class="contact-message">
            {{
              contact.lastMessage.text
                ? contact.lastMessage.text.length >= maxLenght
                  ? contact.lastMessage.text
                      .replace(/<[^>]+>/g, '')
                      .substring(0, maxLenght) + '...'
                  : contact.lastMessage.text.replace(/<[^>]+>/g, '')
                : 'Arquivo'
            }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserContact',
  props: ['contact'],

  data() {
    return {
      windowWidth: 0,
      windowHeight: 0,
    }
  },

  computed: {
    maxLenght() {
      if (this.windowWidth <= 600) {
        return 16
      } else if (this.windowWidth <= 820) {
        return 25
      } else {
        return 45
      }
    },
  },

  mounted() {
    this.getWindowSize()
    window.addEventListener('resize', this.getWindowSize)
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.getWindowSize)
  },

  methods: {
    getWindowSize() {
      this.windowWidth = window.innerWidth
      this.windowHeight = window.innerHeight
    },

    isActive(id) {
      return this.$route.path.split('/')[1] === id.toString()
    },
  },
}
</script>

<style scoped>
div,
span {
  box-sizing: border-box;
}

.row {
  padding: 0 !important;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  margin-left: 1vw;
  margin-right: 1vw;
}

.contact {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
}

.sidebar-body {
  height: 72px;
  cursor: pointer;
  border-radius: 4px;
}

.sidebar-avatar {
  padding-left: 1vw;
  cursor: pointer;
}

.avatar-icon img {
  border-radius: 20%;
  height: 48px;
  width: 48px;
  float: left;
  object-fit: cover;
}
</style>
