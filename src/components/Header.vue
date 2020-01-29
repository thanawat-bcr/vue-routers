<template>
  <nav class="flex justify-between items-center mb-6 px-16 bg-green-200">
    <div class="text-6xl font-bold">Brand</div>
    <div class="text-3xl font-hairline">
      <router-link class="p-4" to="/" active-class="active" exact
        >Home</router-link
      >
      <router-link class="p-4" to="/user" active-class="active"
        >Users</router-link
      >
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.active {
  @apply bg-green-600 rounded-lg text-white;
}
</style>
