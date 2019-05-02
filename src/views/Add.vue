<template>
  <div>
    <textarea type="text" name="title" v-model="title" placeholder="add new tipp"></textarea>
    <button @click="addTipp">save</button>
    <router-link tag="button" id="button" to="/">cancel</router-link>
  </div>
</template>

<script>
  import TippsService from '@/services/TippsService'
  export default {
    name: 'NewTipp',
    data () {
      return {
        title: ''
      }
    },
    methods: {
      async addTipp () {
        await TippsService.addTipp({
          title: this.title,
        })
        this.$router.push({ name: 'home' })
      }
    }
  }
</script>

<style>
  textarea {
    display: block;
    margin: 0 auto 1rem;
  }
</style>
