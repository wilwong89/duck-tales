<template>
  <v-row justify="center" align="center">
    <v-col cols="5">Some stuff in here now</v-col>
    <v-col cols="5">
      <v-form ref="form" v-model="valid" :lazy-validation="lazy">
        <v-text-field
          @click="toggleDatePicker()"
          class="cp"
          v-model="date"
          readonly
          label="Date"
        ></v-text-field>
        <v-date-picker
          v-if="showDatePicker"
          @change="toggleDatePicker()"
          :no-title="false"
          v-model="date"
        ></v-date-picker>
        <v-text-field
          @click="toggleTimePicker()"
          class="cp"
          v-model="time"
          readonly
          label="Time"
        ></v-text-field>
        <v-time-picker
          @click:minute="toggleTimePicker"
          v-if="showTimePicker"
          v-model="time"
        ></v-time-picker>
        <v-text-field
          class=""
          v-model.trim="feedLocation"
          label="Where the ducks were fed"
        ></v-text-field>
        <v-text-field
          class=""
          v-model.trim="foodType"
          label="Type of food"
        ></v-text-field>
        <v-row>
          <v-col cols="8">
            <v-text-field
              class=""
              type="number"
              v-model.number="feedAmount"
              label="Amount of food"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-select
              v-model="feedUnits"
              :items="feedUnitItems"
              label="Units"
              required
            ></v-select>
          </v-col>
        </v-row>
        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
        >
          Validate
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reset">
          Reset Form
        </v-btn>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    date: "",
    time: "",
    name: "",
    feedLocation: "",
    foodType: "",
    feedAmount: "",
    feedUnits: "",
    feedUnitItems: ["Ounces", "Pounds", "Grams", "Kilograms"],
    showDatePicker: false,
    showTimePicker: false
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    toggleDatePicker() {
      this.showDatePicker = !this.showDatePicker;
    },
    toggleTimePicker() {
      this.showTimePicker = !this.showTimePicker;
    }
  }
};
</script>

<style>
.half {
  width: 50% !important;
}
</style>
