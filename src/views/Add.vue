<template>
  <div>
    <textarea v-model="tipp" placeholder="add new tipp"></textarea>
    <button>save</button>
    <router-link tag="button" id="button" to="/">cancel</router-link>
  </div>
</template>

<style>
  textarea {
    display: block;
    margin: 0 auto 1rem;
  }
</style>
