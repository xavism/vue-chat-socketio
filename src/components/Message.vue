<template>
  <div class="wrapper-message">
    <v-layout row>
      <v-flex xs12 :class="align">
        <v-chip :color="colour" text-color="white">{{message}}</v-chip>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: ['align', 'message'],
  computed: {
    colour: function() {
      if (this.align === 'right') return 'primary'
      else return 'green'
    },
  },
}
</script>

<style scoped>
  .right {
    text-align: right;
  }

  .left {
    text-align: left;
  }

  .wrapper-message {
    margin: 10px;
  }
</style>
