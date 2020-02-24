<template>
  <v-app>
    <nav-bar @tabSelected="handleTabChange"></nav-bar>
    <div class="content-container">
      <form-data-input v-if="!viewInput"></form-data-input>
    </div>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
import FormDataInput from "./components/FormDataInput";

export default {
  name: "App",

  components: {
    NavBar,
    FormDataInput
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
  padding-top: 64px;
  max-width: 1366px;
  margin: auto;
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
