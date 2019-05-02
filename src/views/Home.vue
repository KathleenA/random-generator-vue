<template>
  <div class="home">
    <h1>Tipp:</h1>
      <p>{{ tipp.tipp.title }}</p>
      <div class="button-group">
        <button @click="getTipp">next tipp</button>
        <router-link tag="button" id="button" to="/add">add tipp</router-link>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Buttons from '@/components/Buttons.vue'
import TippsService from '@/services/TippsService'

export default {
  name: 'home',
  components: {
    Buttons
  },
  data () {
    return {
      tipp: {
        tipp: {
          title: ''
        }
      }
    }
  },
  mounted () {
    this.getTipp()
  },
  methods: {
    async getTipp () {
      const response = await TippsService.fetchTipp()
      this.tipp = response.data
    }
  }
}
</script>
