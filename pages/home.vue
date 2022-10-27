<template>
  <div class="p-6">
    <h1> User : {{ $auth.user }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'dashboard',
  async mounted() {
    const users = await this.$api.users.show("1")
    console.log(users)
  }

})
</script>