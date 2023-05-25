<template>
  <div id="chat-page" class="container">
    <div class="content">
      <img src="~/assets/images/envelope-solid.svg" />
      <span class="content-text">
        Por favor, selecione uma mensagem à esquerda.
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.content {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content img {
  height: 40vh;
  width: 40vh;
}

.content-text {
  font-size: 1rem;
  font-weight: bold;
  margin-top: 1rem;
}

@media (max-width: 699px) {
  .container {
    height: 100vh;
    margin-left: $nav-width-xs;
  }

  .content img {
    height: 20vh;
    width: 20vh;
  }
}
</style>
