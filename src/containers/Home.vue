<template>
  <v-card>
    <v-card-title><h1>Hi there! I'm {{this.$socket.id}}</h1></v-card-title>
    <v-divider />
    <v-card-text>
      <SocketList />
    </v-card-text>
  </v-card>
</template>

<script>
import SocketList from '@/components/SocketList'

export default {
  components: {
    SocketList,
  },
}
</script>
