<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center cp" @click="reloadPage">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="../assets/duckImg.png"
        transition="scale-transition"
        width="60"
      />
      <div class="nav-title">Duck tales: crowd-sourced</div>
    </div>

    <v-tabs @change="emitTabChange" right height="65">
      <v-tab>Input Data</v-tab>
      <v-tab>View Data</v-tab>
    </v-tabs>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",
  props: {},
  data: function() {
    return {
      uiViews: ["Input Data", "View Data"]
    };
  },
  methods: {
    emitTabChange: function(event) {
      this.$emit("tabSelected", event);
    },
    reloadPage: function() {
      location.reload();
    }
  }
};
</script>

<style>
.nav-title {
  width: 370px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}
</style>
