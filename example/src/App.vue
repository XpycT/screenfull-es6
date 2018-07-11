<template>
  <main role="main">
    <GithubCorner/>
    <FullScreenComponent/>
  </main>
</template>

<script>
import GithubCorner from './components/GithubCorner.vue'
import FullScreenComponent from './components/FullScreenComponent.vue'

export default {
  name: 'app',
  components: {
    GithubCorner,
    FullScreenComponent
  }
}
</script>
