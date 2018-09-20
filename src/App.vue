<template>
  <v-app id="app">
    <SocketNotification />
    <NudgeNotification />
    <router-view />
  </v-app>
</template>

<script>
import SocketNotification from '@/components/SocketNotification'
import NudgeNotification from '@/components/NudgeNotification'

export default {
  components: {
    SocketNotification,
    NudgeNotification,
  },
  mounted() {
    this.$socket.on('send-message', data => {
      debugger
      this.$store.dispatch('addMessage', { from: data.message.from, to: data.message.to, text: data.message.text })
    })
  },
}
</script>

<style>
a {
  text-decoration: none;
}
</style>
