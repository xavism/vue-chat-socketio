<template>
  <div>
    <v-layout row>
      <v-flex xs12>
          <v-toolbar color="pink" dark>
            <v-toolbar-side-icon>
              <a href="/">
                <v-btn icon>
                  <v-icon large>keyboard_arrow_left</v-icon>
                </v-btn>
              </a>
            </v-toolbar-side-icon>
            <v-toolbar-title>Chat with {{idUser}}</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
      </v-flex>
    </v-layout>
    <Message align="right" message="Holi"></Message>
    <Message align="left" message="Heyy"></Message>
    <v-footer fixed
      class="padding10">
      <v-layout row
      height="100px">
        <v-flex xs12>
          <v-text-field
            label="Outline"
            outline
            append-icon="send"
            @click:append="sendMessage"
            v-model="msg"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-footer>
  </div>
</template>

<script>
import SocketList from '@/components/SocketList'
import Message from '@/components/Message'
import { mapGetters } from 'vuex'

export default {
  components: {
    SocketList,
    Message,
  },
  data() {
    return {
      msg: '',
    }
  },
  props: ['idUser'],
  computed: {
    ...mapGetters([
      'messages',
    ]),
    parsedMessages: () => {
      return this.messages.map(m => m.text)
    },
  },
  methods: {
    sendMessage() {
      this.$store.dispatch('addMessage', { from: this.$socket.id, to: this.idUser, text: this.msg })
      this.$socket.emit('send-message', {
        from: this.$socket.id,
        to: this.idUser,
        message: { from: this.$socket.id, to: this.idUser, text: this.msg },
      })
      this.msg = ''
    },
  },
}
</script>

<style>
.padding10 {
  padding: 10px;
}
</style>
