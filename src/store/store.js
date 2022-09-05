import { createStore } from 'vuex';
import stxStore from './modules/stxStore'
export default createStore({
  modules: {
    stxStore
  }
});