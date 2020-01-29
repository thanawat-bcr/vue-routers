<template>
  <div class="">
    <div class=" text-6xl font-bold ">User Edit {{ id }}</div>
    <div class=" text-6xl font-bold ">{{ a }}</div>
    <div class=" text-6xl font-bold ">{{ b }}</div>
    <div class="h-screen"></div>
    <div id="data">Data to scroll</div>
  </div>
</template>

<script>
export default {
  props: ["id", "a", "b"]
};
</script>

<style></style>
