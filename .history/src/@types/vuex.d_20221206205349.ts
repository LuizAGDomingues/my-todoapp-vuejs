import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  // declare your own store states
  interface todos {
    id: number,
    title: string,
    isCompleted: boolean,
    timingPass: number
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}