import Api from '@/services/Api'

export default {
  fetchTipp () {
    return Api().get('/')
  }
}
