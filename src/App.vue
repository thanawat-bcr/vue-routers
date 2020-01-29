<template>
  <div id="app">
    <!-- <Header></Header> -->
    <router-view name="top"></router-view>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <router-view name="bottom"></router-view>
  </div>
</template>

<script>
// import Header from "./components/Header";
export default {
  components: {
    // Header
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
