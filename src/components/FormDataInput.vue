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
          :rules="dateRules"
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
          :rules="timeRules"
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
          :rules="feedLocationRules"
          label="Where the ducks were fed"
        ></v-text-field>
        <v-text-field
          class=""
          type="number"
          :rules="numDuckRules"
          v-model.number="numberOfDucks"
          label="Number of ducks fed"
          min="0"
        ></v-text-field>
        <v-text-field
          class=""
          :rules="foodRules"
          v-model.trim="food"
          label="Type of food"
        ></v-text-field>
        <v-row>
          <v-col cols="8">
            <v-text-field
              class=""
              type="number"
              :rules="feedAmountRules"
              v-model.number="feedAmount"
              min="0"
              label="Amount of food"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-select
              v-model="feedUnits"
              :items="feedUnitItems"
              label="Units"
              :rules="feedUnitsRules"
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

        <v-btn color="error" class="mr-4" @click="validate">
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
    dateRules: [v => !!v || "Date is required"],
    time: "",
    timeRules: [v => !!v || "Time is required"],
    food: "",
    foodRules: [v => !!v || "What kind of food is required"],
    feedLocation: "",
    feedLocationRules: [v => !!v || "Location is required"],
    numberOfDucks: "",
    numDuckRules: [
      v => !!v || "Number is required",
      v => (v && v <= 32767) || "Cannot be over 32767 ducks"
    ],
    feedAmount: "",
    feedAmountRules: [
      v => !!v || "Number is required",
      v => (v && v <= 32767) || "Cannot be over 32767"
    ],
    feedUnits: "",
    feedUnitsRules: [v => !!v || "Units are required"],
    feedUnitItems: ["Ounces", "Pounds", "Grams", "Kilograms"],
    showDatePicker: false,
    showTimePicker: false,
    error: ""
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
      this.error = "";

      const formObj = {
        date: this.date,
        time: this.time,
        location: this.feedLocation,
        numberOfDucks: this.numberOfDucks,
        food: this.food,
        feedAmount: this.feedAmount,
        feedUnits: this.feedUnits
      };
      serverCalls
        .submitFormCall(formObj)
        .then(result => {
          if (result.error) {
            this.error = result.error;
          } else {
            this.reset();
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style></style>
