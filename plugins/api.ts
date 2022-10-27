import { Plugin } from '@nuxt/types'
import { AxiosResponse } from 'axios'
import createRepository from '~/services/repository'



interface Resources {
        index():  Promise<AxiosResponse>,
        create(payload: Object): Promise<AxiosResponse>,
        show( id: string): Promise<AxiosResponse>,
        update(payload: Object, id: string): Promise<AxiosResponse>,
        delete( id: string): Promise<AxiosResponse>,
}

interface APIPlugin {
    posts: Resources,
    users: Resources,
  }

declare module '@nuxt/types' {
  interface Context {
    $api: APIPlugin 
  }
}

declare module 'vue/types/vue' {
    interface Vue {
        $api: APIPlugin 
    }
  }
  

const $api: Plugin = (context, inject) => {

    const repoFactory = createRepository(context.$axios)

    const repositories = {
      posts: repoFactory('posts'),
      users: repoFactory('users')
    }
  
  
  context.$api = repositories
  inject('api', repositories)

}

export default $api