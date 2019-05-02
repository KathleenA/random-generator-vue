<template>
  <div class="button-group">
    <button @click="getTipp">next tipp</button>
    <router-link tag="button" id="button" to="/add">add tipp</router-link>
  </div>
</template>

<script>
import TippsService from '@/services/TippsService'
export default {
  name: 'Buttons',
  methods: {
    async getTipp () {
      const response = await TippsService.fetchTipp()
      this.tipp = response.data
    }
  }
}
</script>
