<template>
  <div></div>
</template>

<script>
export default {
  layout: 'login',

  async mounted() {
    const { data } = await this.$axios.post('/huggy-auth/oauth/access_token', {
      grant_type: 'authorization_code',
      redirect_uri: 'http://teste.local.com:3000/login/callback',
      client_id: process.env.client_id,
      client_secret: process.env.client_secret,
      code: this.$route.query.code,
    })
    localStorage.setItem('access_token', data.access_token)
    localStorage.setItem('refresh_token', data.refresh_token)
    localStorage.setItem('expires_in', data.expires_in)
    this.$router.push('/')
  },
}
</script>

<style>
</style>
