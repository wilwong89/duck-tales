<template>
  <v-container fluid class="data-display">
    <v-data-iterator
      :loading="true"
      loading-text="Loading... please wait"
      :items="items"
      :items-per-page.sync="itemsPerPage"
      :page="page"
      :search="search"
      :sort-by="sortBy.toLowerCase()"
      :sort-desc="sortDesc"
      hide-default-footer
    >
      <template v-slot:header>
        <v-toolbar dark color="blue darken-3" class="mb-1">
          <template v-if="$vuetify.breakpoint.mdAndUp">
            <v-select
              v-model="sortBy"
              flat
              hide-details
              :items="keys"
            ></v-select>
            <v-spacer></v-spacer>
            <v-btn-toggle v-model="sortDesc" mandatory>
              <v-btn large depressed color="blue" :value="false">
                <v-icon>mdi-arrow-up</v-icon>
              </v-btn>
              <v-btn large depressed color="blue" :value="true">
                <v-icon>mdi-arrow-down</v-icon>
              </v-btn>
            </v-btn-toggle>
          </template>
        </v-toolbar>
      </template>

      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.name"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card>
              <v-list dense>
                <v-list-item v-for="(key, index) in filteredKeys" :key="index">
                  <v-list-item-content :class="{ 'blue--text': sortBy === key }"
                    >{{ key }}:</v-list-item-content
                  >
                  <div
                    v-if="key === 'date'"
                    style="text-align: right"
                    :class="{ 'blue--text': sortBy === key }"
                  >
                    {{ item[key.toLowerCase()] | showDate }}
                  </div>
                  <div
                    v-else
                    style="text-align: right"
                    :class="{ 'blue--text': sortBy === key }"
                  >
                    {{ item[key.toLowerCase()] }}
                  </div>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>

      <template v-slot:footer>
        <v-row class="mt-2" align="center" justify="center">
          <span class="grey--text">Items per page</span>
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn dark text color="primary" class="ml-2" v-on="on">
                {{ itemsPerPage }}
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(number, index) in itemsPerPageArray"
                :key="index"
                @click="updateItemsPerPage(number)"
              >
                <v-list-item-title>{{ number }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-spacer></v-spacer>

          <span
            class="mr-4
            grey--text"
          >
            Page {{ page }} of {{ numberOfPages }}
          </span>
          <v-btn
            fab
            dark
            color="blue darken-3"
            class="mr-1"
            @click="formerPage"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab dark color="blue darken-3" class="ml-1" @click="nextPage">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
import serverCalls from "../ajax_calls/serverCalls";
export default {
  data() {
    return {
      itemsPerPageArray: [4, 8, 12],
      search: "",
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 4,
      sortBy: "date",
      keys: [
        "date",
        "food",
        "location",
        "number_of_ducks",
        "food_amount",
        "food_units"
      ],
      items: []
    };
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    filteredKeys() {
      return this.keys.filter(key => key !== `Name`);
    }
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
    loadFeedingData() {
      serverCalls
        .getFeedingData()
        .then(response => {
          this.items = response;
        })
        .catch(err => console.log(err));
    }
  },
  mounted() {
    this.loadFeedingData();
  },
  filters: {
    showDate: function(input) {
      const result = "N/A";
      if (!input) return result;
      const date = new Date();
      date.setTime(input);
      const dateArr = date.toUTCString().split(" ");
      const timeArr = dateArr[4].split(":");
      const hour =
        parseInt(timeArr[0]) + 7 > 23
          ? parseInt(timeArr[0]) + 7 - 24
          : parseInt(timeArr[0]) + 7;
      return `${dateArr[3]}/${dateArr[2]}/${dateArr[1]}, ${hour}:${timeArr[1]}`;
    }
  }
};
</script>

<style></style>
