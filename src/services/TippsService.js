import Api from '@/services/Api'

export default {
  fetchTipp () {
    return Api().get('/')
  },

  addTipp (params) {
    return Api().post('add', params)
  }
}
