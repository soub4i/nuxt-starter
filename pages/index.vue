<template>

  <div>
    <div class="mx-auto my-36 flex w-80 flex-col border-2 bg-white text-black shadow-xl">
      <div class="mx-8 mt-7 mb-1 flex flex-row justify-start space-x-2">
        <div class="h-7 w-3 bg-green-200"></div>
        <div class="w-3 text-center font-sans text-xl font-bold">
          <h1>Login</h1>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <input
          class="my-2 w-72 border p-2"
          v-model="credentials.email"
          type="email"
          placeholder="Username"
        />
        <input
          class="my-2 w-72 border p-2"
          v-model="credentials.password"
          type="password"
          placeholder="Password"
        />
      </div>
      <div class="my-2 flex justify-center">
        <button
          class="w-72 border bg-green-200 p-2 font-sans"
          @click.prevent="login()"
        >Login</button>
      </div>
      <div class="mx-7 my-3 flex justify-between text-sm font-semibold">
        <div>
          <h1>Forget Password</h1>
        </div>
        <div>
          <h1 class="underline underline-offset-2">Signup</h1>
        </div>
      </div>
    </div>
  </div>

</template>
  <script lang="ts">
import Vue from 'vue'
import { Credentials } from '~/types/auth'
export default Vue.extend({
  data() {
    const credentials: Credentials = {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
    }
    return {
      credentials,
    }
  },
  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: this.credentials,
        })
        this.$router.push({ path: '/home' })

      } catch (error) {
        console.error(error)
      }
    },
  },
})
</script>