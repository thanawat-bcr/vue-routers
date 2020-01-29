<template>
  <div class="flex flex-col items-center">
    <div class="text-6xl font-bold">Users</div>
    <a @click="goHome" class="text-xl bg-green-300 rounded-lg p-3 cursor-pointer">Home</a>
    <hr />

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push("/");
    }
  },
  watch: {
    $route(to, from) {
      console.log("Route Changed", to, from);
    }
  }
};
</script>

<style></style>
