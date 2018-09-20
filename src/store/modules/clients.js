import api from './../../api'
import * as mutation from './../mutation-types'

const state = {
  clients: [],
  messages: [],
  loading: false,
}

const getters = {
  clientList: (state) => state.clients,
  messages: (state) => state.messages,
}

const mutations = {
  [mutation.SET_CLIENT_LIST](state, payload) {
    state.clients = payload
  },
  [mutation.IS_LOADING_CLIENT_LIST](state, payload) {
    state.loading = payload
  },
  [mutation.ADD_MESSAGE](state, message) {
    state.messages.push(message)
  },
}

const actions = {
  getConnectedClients: ({ commit }) => new Promise((resolve, reject) => {
    const onSuccess = (response) => {
      commit(mutation.SET_CLIENT_LIST, response.body)
      commit(mutation.IS_LOADING_CLIENT_LIST, false)

      resolve(response)
    }

    const onError = (error) => {
      commit(mutation.SET_CLIENT_LIST, [])
      commit(mutation.IS_LOADING_CLIENT_LIST, false)
      reject(error)
    }

    commit(mutation.IS_LOADING_CLIENT_LIST, true)

    api.getConnectedClients().then(onSuccess).catch(onError)
  }),
  addMessage: ({ commit }, message) => new Promise((resolve, reject) => {
    debugger
    try {
      commit(mutation.ADD_MESSAGE, {from: message.from, to: message.to, text: message.text})
      resolve('Ok')
    } catch (error) {
      reject(error)
    }
  }),
}

export default {
  state,
  actions,
  getters,
  mutations,
}
