<template>
  <div class="">
    <div class=" text-6xl font-bold ">User Detail ID : {{ id }}</div>
    <div class=" text-6xl font-bold ">
      User Detail ID : {{ this.$route.params.id }}
    </div>
    <router-link
      :to="{ name: 'UserEdit', query: { a: 100, b: 200 }, hash: '#data' }"
      class="px-4 py-2 bg-green-300 rounded-lg"
      >Edit</router-link
    >
  </div>
</template>

<script>
export default {
  props: ["id"]
};
</script>

<style></style>
