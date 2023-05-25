<template>
  <div id="ChatHeader">
    <div class="row heading">
      <div class="heading-sidebar">
        <button class="sidebar-button" @click="toggleSidebar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="18"
            height="18"
          >
            <path
              d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
            />
          </svg>
        </button>
      </div>
      <div class="heading-avatar">
        <div class="heading-avatar-icon">
          <img :src="chat.chatCustomer.photo" />
        </div>
      </div>
      <div class="heading-name-wrapper">
        <a class="heading-name"> {{ chat.chatCustomer.name }} </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'ChatHeader',
  props: ['chat'],

  computed: {
    ...mapState('sidebar', ['sidebarOpen']),
  },

  methods: {
    ...mapActions('sidebar', ['toggleSidebar']),
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
  margin: 0 !important;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.sidebar-button {
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
}

.heading {
  height: 60px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.04);
  z-index: 1000000;
}

.heading-sidebar {
  display: none;
}

.heading-avatar {
  margin-left: 1rem;
  cursor: pointer;
}

.heading-avatar-icon img {
  border-radius: 20%;
  height: 40px;
  width: 40px;
  object-fit: cover;
}

.heading-name-wrapper {
  padding: 0 !important;
  cursor: pointer;
}

@media (max-width: 699px) {
  .heading-sidebar {
    display: block;
    margin-left: 1rem;
    cursor: pointer;
  }
}
</style>
