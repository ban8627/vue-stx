import axios from "axios"
const state = {
  gnbData:[],
  newsData:[],
  noticeData:[]
}
const actions = {
  // 
  fetchGnb({ commit }) {
    // gnb.json 데이터를axios 로 받아온다.
    // mutation: 즉, state 를 업데이트 하기 위해 필요한 메서드 (commit)
    axios.get('./data/gnb.json')
      .then(response => {
        console.log("axios", response)
        // commit ('mutation 메서드 이름',전달할 값)
        commit('UPDATE_GNB', response.data)
      }
      )
      .catch(err => console.log(err))
  },
  fetchNews({ commit }) {
    // news.json 데이터를 axios 로 호출한다.
    axios.get('./data/news.json')
      .then(response => {
        console.log("axios", response)
        commit('UPDATE_NEWS',response.data)
      })
      .catch(err => console.log(err))
  },
  fetchNotice({commit}) {
    axios.get('./data/notice.json')
      .then(response => {
        console.log("axios", response)
        commit('UPDATE_NOTICE',response.data)
      })
      .catch(err => console.log(err))
  }
}
const mutations = {
  UPDATE_GNB(state, payload) {
    console.log(payload)
    // 최종적으로 store 데이터 state.gnbData 업데이트
    state.gnbData = payload
  },
  UPDATE_NEWS(state, payload) {
    console.log(payload)
    state.newsData=payload
  },
  UPDATE_NOTICE(state, payload) {
    console.log(payload)
    state.noticeData=payload
  }
}
const getters = {
  getGnbData(state) {
    return state.gnbData
  },
  getNoticeData(state) {
    return state.noticeData
  },
  getNewsData(state) {
    return state.newsData
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}