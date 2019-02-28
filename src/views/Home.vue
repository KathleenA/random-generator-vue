<template>
  <div class="home">
    <h1>Tipp:</h1>
      <p>{{ tipp.title }}</p>
    <Buttons />
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
      tipp: {}
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
