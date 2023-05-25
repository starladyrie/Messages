<template>
  <div id="ChatFooter">
    <div class="row footer">
      <div class="footer-textarea-wrapper">
        <div class="footer-textarea">
          <textarea
            v-model="message"
            placeholder="Escreva sua mensagem..."
            class="message-input message-input-style"
            :disabled="imageURL.length > 0"
          />
          <img v-if="imageURL" :src="imageURL" class="upload-image" />
          <label for="upload" class="upload-label">
            <svg
              v-if="!imageURL"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M12.5 7C12.8978 7 13.2794 6.84197 13.5607 6.56066C13.842 6.27936 14 5.89782 14 5.5C14 5.10218 13.842 4.72064 13.5607 4.43934C13.2794 4.15803 12.8978 4 12.5 4C12.1022 4 11.7206 4.15803 11.4393 4.43934C11.158 4.72064 11 5.10218 11 5.5C11 5.89782 11.158 6.27936 11.4393 6.56066C11.7206 6.84197 12.1022 7 12.5 7Z"
                fill="#75757B"
              />
              <path
                d="M0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H16C16.5304 0 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18H2C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 0 16.5304 0 16V2ZM16 2H2V9.92L5.375 7.22C5.55236 7.078 5.77279 7.00062 6 7.00062C6.22721 7.00062 6.44764 7.078 6.625 7.22L10.925 10.66L12.293 9.293C12.4805 9.10553 12.7348 9.00021 13 9.00021C13.2652 9.00021 13.5195 9.10553 13.707 9.293L16 11.586V2ZM2 16H16V14.414L13 11.414L11.707 12.707C11.533 12.8811 11.3009 12.9849 11.0551 12.9986C10.8094 13.0122 10.5672 12.9348 10.375 12.781L6 9.28L2 12.48V16Z"
                fill="#75757B"
              />
            </svg>
          </label>
          <input
            id="upload"
            class="upload-input"
            type="file"
            name="image"
            accept="*"
            @change="handleFileUpload"
          />
          <button v-if="imageURL" class="cancel-upload" @click="cancelUpload">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9 1.63636C4.93318 1.63636 1.63636 4.93318 1.63636 9C1.63636 13.0668 4.93318 16.3636 9 16.3636C13.0668 16.3636 16.3636 13.0668 16.3636 9C16.3636 4.93318 13.0668 1.63636 9 1.63636ZM0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9ZM5.96687 5.96694C6.28639 5.64742 6.80444 5.64742 7.12396 5.96694L8.99996 7.84294L10.876 5.96694C11.1955 5.64742 11.7135 5.64742 12.033 5.96694C12.3526 6.28646 12.3526 6.8045 12.033 7.12402L10.157 9.00002L12.033 10.876C12.3526 11.1955 12.3526 11.7136 12.033 12.0331C11.7135 12.3526 11.1955 12.3526 10.876 12.0331L8.99996 10.1571L7.12396 12.0331C6.80444 12.3526 6.28639 12.3526 5.96687 12.0331C5.64735 11.7136 5.64735 11.1955 5.96687 10.876L7.84288 9.00002L5.96687 7.12402C5.64735 6.8045 5.64735 6.28646 5.96687 5.96694Z"
                fill="#75757B"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="footer-button-wrapper">
        <div class="footer-button">
          <button
            class="send-button send-button-style"
            :disabled="isMessageEmpty"
            @click="sendMessage"
          >
            <span class="send-button-text"> Enviar </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatFooter',

  data() {
    return {
      id: this.$route.params.id,
      message: '',
      imageURL: '',
    }
  },

  computed: {
    isMessageEmpty() {
      return this.imageURL.length === 0 && this.message.length === 0
    },
  },

  methods: {
    async handleFileUpload(event) {
      this.imageURL = ''
      const file = event.target.files[0]
      if (!file) this.imageURL = ''
      else {
        const formData = new FormData()
        formData.append('image', file)
        const response = await this.$axios.post('/imgur/upload', formData, {
          headers: {
            Authorization: 'Client-ID cea15211c35954c',
          },
        })
        this.imageURL = response.data.data.link
      }
    },

    cancelUpload() {
      this.imageURL = ''
    },

    async sendMessage() {
      console.log('url', this.imageURL)
      await this.$axios
        .post(`/huggy/chats/${this.id}/messages`, {
          text: this.message,
          file: this.imageURL,
        })
        .then(() => {
          this.message = ''
          this.imageURL = ''
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>

<style lang="scss" scoped>
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
  justify-content: center;
  position: fixed;
}

.footer {
  height: 300px;
  background-color: #fff;
  box-shadow: 0px -1px 6px rgba(0, 0, 0, 0.03);
  z-index: 1000;
}

.footer-textarea-wrapper {
  position: relative;
  cursor: pointer;
}

.footer-textarea {
  width: 90%;
}

.message-input-style {
  font-size: 14px;
  padding: 10px;
  resize: none;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.upload-input {
  display: none;
}

.upload-label {
  position: absolute;
  right: 10px;
  bottom: 15px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.upload-label svg {
  fill: rgb(117, 117, 123);
  vertical-align: middle;
  margin-right: 5px;
  cursor: pointer;
}

.upload-image {
  position: absolute;
  right: 40px;
  bottom: 15px;
  width: 128px;
  height: 128px;
  object-fit: cover;
  border-radius: 4px;
}

.cancel-upload {
  position: absolute;
  right: 10px;
  bottom: 15px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.cancel-upload svg {
  fill: rgb(117, 117, 123);
  vertical-align: middle;
  margin-right: 5px;
  cursor: pointer;
}

.footer-button-wrapper {
  cursor: pointer;
}

.footer-button {
  padding: 0 !important;
  cursor: pointer;
}

@media (max-width: 699px) {
  .row {
    display: flex;
    flex-direction: column;
  }

  .footer {
    height: 200px;
    width: 100vw;
  }

  .message-input {
    height: 15vh;
    width: 90vw;
  }

  .send-button {
    width: 90vw;
  }
}

@media (min-width: 700px) {
  .message-input {
    height: 18vh;
    width: 44vw;
  }

  .send-button {
    width: 44vw;
  }
}

@media (min-width: 820px) {
  .message-input {
    height: 16vh;
    width: 50vw;
  }

  .send-button {
    width: 50vw;
  }
}

@media (min-width: 1000px) {
  .message-input {
    height: 20vh;
    width: 55vw;
  }

  .send-button {
    width: 55vw;
  }
}

@media (min-width: 1200px) {
  .message-input {
    height: 20vh;
    width: 62vw;
  }

  .send-button {
    width: 62vw;
  }
}

@media (min-width: 1301px) {
  .message-input {
    height: 20vh;
    width: 73vw;
  }

  .send-button {
    width: 73vw;
  }
}
</style>
