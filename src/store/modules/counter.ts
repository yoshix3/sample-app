import {getData} from '../../common/countAPI';

// stateの型を定義
export interface CounterState {
  value: number;
  isLoading: boolean;
  status: 'idle' | 'loading' | 'failed';
}

// initial state
const state: CounterState = {
  value: 0,
  status: 'idle',
  isLoading: false,
}

// getters
const getters = {
  isLoading: (state: CounterState) => state.isLoading,
  value: (state: CounterState) => state.value,
  status: (state: CounterState) => state.status,
}

// actions
const actions = {
  async incrementAsync (context: { commit: (arg0: string, payload?: {amount: number}) => void; }, payload: {amount: number}) {
    context.commit('loading');
    const result = await getData();
    console.log(result);
    context.commit('increment', {amount: result});
    context.commit('loaded');
  }  
}

// mutations
const mutations = {
  increment (state: CounterState, payload: {amount: number}) {
    console.log(payload.amount)
    // 状態を変更する
    state.value += payload.amount;
  },
  loading (state: CounterState) {
    console.log('loading...')
    state.isLoading = true
    state.status = 'loading'
  },
  loaded (state: CounterState) {
    console.log('loaded')
    state.isLoading = false
    state.status = 'idle'
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}