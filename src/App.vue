<template>
  <v-app>
    <nav-bar @tabSelected="handleTabChange"></nav-bar>
    <div class="content-container">
      <form-data-input v-if="!viewInput"></form-data-input>
      <data-display v-else></data-display>
    </div>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
import FormDataInput from "./components/FormDataInput";
import DataDisplay from "./components/DataDisplay";

export default {
  name: "App",

  components: {
    NavBar,
    FormDataInput,
    DataDisplay
  },
  data: () => ({
    viewInput: 0
  }),
  methods: {
    handleTabChange: function(payload) {
      this.viewInput = payload;
    }
  }
};
</script>

<style>
.content-container {
  width: 75vw;
  max-height: 80vh;
  margin-top: 64px;
  margin-left: auto;
  margin-right: auto;
}

.f-col {
  flex-direction: column;
}

.f-row {
  flex-direction: row;
}

.cp {
  cursor: pointer;
}
</style>
