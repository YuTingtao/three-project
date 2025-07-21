import { defineStore } from 'pinia';

export const useStore = defineStore('store', {
  state: () => ({}),
  getters: {},
  actions: {},
  // 状态持久化
  persist: {
    key: 'store',
    storage: localStorage
  }
});
