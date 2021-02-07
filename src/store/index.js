import Vue from 'vue'
import Vuex from 'vuex'
import flights from '../data/log'
// import addTimes from '../js/add_two_times'
import addTimes from '../components/addTimes'

Vue.use(Vuex)

// Vue.loadScript('../js/add_two_times.js')

export default new Vuex.Store({
  state: {
    flights
  },
  mutations: {
    appendFlight: (state, payload) => {
      console.log(state)
      state.flights.push(payload)
    }
  },
  actions: {
    addFlight: ({ commit }, payload) => {
      commit('appendFlight', payload)
    }
  },
  modules: {
  },
  getters: {
    flightsCount: (state) => {
      return state.flights.length
    },
    totalFlightTime: (state) => {
      let sum = ''
      state.flights.forEach(flights => {
        // console.log(flights.TotalTimeOfFlight)
        console.log(sum)
        sum = addTimes(sum, flights.TotalTimeOfFlight)
      })
      // return sum
    }
  }
})
