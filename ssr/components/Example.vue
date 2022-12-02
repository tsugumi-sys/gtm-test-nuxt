<!-- Please remove this file from your project -->
<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <h1>Hello Exmaple page!</h1>
    <nuxt-link to="/">Go to Index Page</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'ExamplePage',
  head() {
    return {
      title: 'ExamplePage'
    }
  }
}
</script>