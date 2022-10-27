import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  title: "" as string
})
export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
    getTitle: state => state.title
}

export const mutations: MutationTree<RootState> = {
  CHANGE_TITLE: (state, newVal: string) => (state.title = newVal)
}

export const actions: ActionTree<RootState, RootState> = {
  updateTitle({ commit }, newVal) {
    commit('CHANGE_TITLE', newVal)
  }
}