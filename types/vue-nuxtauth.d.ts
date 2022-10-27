import { Auth } from '@nuxtjs/auth-next'

declare module 'vuex/types/index' {
    interface Store<S> {
        $auth: Auth,
    }
}