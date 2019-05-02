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
import PostsService from '@/services/PostsService'

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
      const response = await PostsService.fetchTipp()
      this.tipp = response.data
    }
  }
}
</script>
