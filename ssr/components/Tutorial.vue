<!-- Please remove this file from your project -->
<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <h1>Hello Index page</h1>
    <nuxt-link to="/example">Go to Example Page</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'NuxtTutorial',
  head() {
    return {
      title: 'IndexPage'
    }
  }
}
</script>
