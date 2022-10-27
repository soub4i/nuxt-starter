import { Store } from 'vuex'

export interface RootState {
  title: string
}

declare module '@vue/runtime-core' {
  // declare your own store states


  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<RootState>
  }
}