<template>
  <nav>
    <contact-list class="navbar" />
  </nav>
</template>

<script>
import ContactList from '../Auxiliary/ContactList.vue'

export default {
  name: 'LeftSidebar',
  components: { ContactList },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';

nav {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  background: #fff;
  border-right: 1px solid #c7c7c73b;
  z-index: 100000;
}

.navbar {
  border-right: 1px solid #c7c7c73b;
}

@media (max-width: 699px) {
  .navbar {
    width: $nav-width-xs;
    height: 100vh;
    margin-top: 60px;
    margin-bottom: 200px;
  }
}

@media (min-width: 700px) {
  nav {
    width: $nav-width-sm;
  }
}

@media (min-width: 1200px) {
  nav {
    width: $nav-width-base;
  }
}
</style>
