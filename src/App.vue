<template>
  <v-app>
    <nav-bar></nav-bar>
    <div class="content-container">
      <form-data-input></form-data-input>
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
    //
  })
};
</script>

<style>
.content-container {
  margin-top: 64px;
}
.flex {
  display: flex;
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
