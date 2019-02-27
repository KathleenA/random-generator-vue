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

export default {
  name: 'home',
  components: {
    RandomText,
    Buttons,
  }
}
</script>
