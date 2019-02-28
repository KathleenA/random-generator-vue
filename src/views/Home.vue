<template>
  <div class="home">
    <h1>Tipp:</h1>
    <RandomText />
    <Buttons />
  </div>
</template>

<script>
// @ is an alias to /src
import RandomText from '@/components/RandomText.vue'
import Buttons from '@/components/Buttons.vue'
import PostsService from '@/services/PostsService'

export default {
  name: 'home',
  components: {
    RandomText,
    Buttons,
  },
  data () {
    return {
      posts: []
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
