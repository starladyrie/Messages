<template>
  <div>
    <LeftSidebar v-if="sidebarOpen" />
    <nuxt />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import LeftSidebar from '~/components/Layouts/LeftSidebar.vue'

export default {
  components: {
    LeftSidebar,
  },
  middleware: 'auth',

  computed: {
    ...mapState('sidebar', ['sidebarOpen']),
  },

  methods: {
    ...mapActions('sidebar', ['toggleSidebar']),
  },
}
</script>

<style>
</style>
