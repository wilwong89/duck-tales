<template>
  <div class="nav-container flex f-s-between">
    <div class="nav-item nav-corner-icon"></div>
    <div class="nav-item nav-links"></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {},
  methods: {}
};
</script>

<style>
.nav-container {
  height: 100px;
  width: 100%;
  background-color: lightseagreen;
}

.nav-item {
  height: 100%;
  line-height: 100px;
}
</style>