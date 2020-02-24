<template>
  <v-row justify="center" align="center" align-items="stretch">
    <v-col cols="5">
      <v-img class="input-column" src="https://i.imgur.com/LNBKydL.jpg"></v-img>
    </v-col>
    <v-col cols="5">
      <v-form class="input-column" ref="form" v-model="valid">
        <v-text-field
          v-show="!showDatePicker"
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
          v-show="!showTimePicker"
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
          type="number"
          v-model.number="numberOfDucks"
          label="Number of ducks fed"
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
          @click="submitForm"
        >
          Submit
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reset">
          Reset Form
        </v-btn>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import serverCalls from "../ajax_calls/serverCalls";
export default {
  data: () => ({
    valid: true,
    date: "",
    time: "",
    foodType: "",
    feedLocation: "",
    numberOfDucks: "",
    feedAmount: "",
    feedUnits: "",
    feedUnitItems: ["Ounces", "Pounds", "Grams", "Kilograms"],
    showDatePicker: false,
    showTimePicker: false
  }),
  methods: {
    validate() {
      console.log("validator:", this.$refs.form.validate());
    },
    reset() {
      this.$refs.form.reset();
    },
    toggleDatePicker() {
      this.showDatePicker = !this.showDatePicker;
    },
    toggleTimePicker() {
      this.showTimePicker = !this.showTimePicker;
    },
    submitForm() {
      const formObj = {
        date: this.date,
        time: this.time,
        location: this.feedLocation,
        numberOfDucks: this.numberOfDucks,
        foodType: this.foodType,
        feedAmount: this.feedAmount,
        feedUnits: this.feedUnits
      };
      serverCalls
        .submitFormCall(formObj)
        .then(result => {
          console.log(result);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style></style>
