<template>
  <div class="row">
    <span class="heading-title">Área de Login</span>
    <span class="heading-subtitle"
      >Faça login para acessar nosso super-aplicativo</span
    >

    <div class="login-button-wrapper">
      <div class="login-button">
        <a
          :href="`https://auth.huggy.app/oauth/authorize?scope=install_app%20read_agent_profile&response_type=code&redirect_uri=http://teste.local.com:3000/login/callback&client_id=${client_id}`"
        >
          <button class="login-button-style">
            <span class="login-button-text"> Fazer login com a Huggy </span>
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'login',

  data() {
    return {
      client_id: process.env.client_id,
    }
  },
}
</script>

<style>
div,
span {
  height: fit-content;
  overflow: hidden;
  padding: 0;
  margin: 0;
}

.row {
  padding: 0 !important;
  margin: 0 !important;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';

.heading-title {
  font-weight: $font-weight-semibold;
  font-size: $font-size-2xl;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: $color-text-on-neutral-low-cta;
  display: block;
}

.heading-subtitle {
  font-weight: $font-weight-semibold;
  font-size: $font-size-lg;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: $color-text-on-neutral-low-default;
  display: block;
  margin-top: 1rem;
}

.login-button-wrapper {
  padding: 0 !important;
  margin-top: 4rem;
}

.login-button {
  cursor: pointer;
}

.login-button-style {
  border-radius: 8px;
  background-color: $color-fill-primary-4;
  color: $color-fill-neutral-low-0;
  width: 270px;
  padding: 10px;
  border: none;
  cursor: pointer;
}

.login-button-text {
  font-size: $font-size-lg;
  font-weight: $font-weight-bold;
}
</style>
