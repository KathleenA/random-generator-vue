<template>
  <div class="button-group">
    <button @click="getTipp">next tipp</button>
    <router-link tag="button" id="button" to="/add">add tipp</router-link>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'Buttons',
  methods: {
    async getTipp () {
      const response = await PostsService.fetchTipp()
      this.tipp = response.data
    }
  }
}
</script>
