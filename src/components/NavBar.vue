<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />

      <v-img
        alt="Vuetify Name"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
        width="100"
      />
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
    }
  }
};
</script>

<style>
.nav-container {
  width: 100%;
  background-color: lightseagreen;
}

.nav-item {
  line-height: 100px;
}
</style>
