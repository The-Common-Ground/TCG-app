<template>
  <div class="d-flex flex-column">
    <div class="d-flex flex-fill align-center my-5" style="padding-inline: 10%">
      <v-btn variant="text" @click="decrementMonth" class="text-h4"><</v-btn>
      <v-btn variant="text" @click="incrementMonth" class="text-h4">></v-btn>

      <p class="pa-2 text-h5 text-center">
        {{ `${selectedMonth} ${year}` }}
      </p>
    </div>

    <div></div>

    <CalendarTable
      class="mx-auto"
      :month="month"
      :year="year"
      :key="`${month}${year}`"
      v-if="render"
    ></CalendarTable>
  </div>
</template>

<script>
import CalendarTable from "../components/calendar/CalendarTable.vue";
import EventCard from "/components/EventCard.vue";
import events from "/public/events.json";

export default {
  components: {
    // CalendarTable,
    EventCard,
  },
  props: {
    width: Number,
  },
  data: () => ({
    // Month Selector
    month: new Date(Date.now()).getMonth(),
    year: new Date(Date.now()).getFullYear(),
    render: true,
  }),
  computed: {
    selectedMonth() {
      const longMonths = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      return longMonths[this.month];
    },
    events() {
      return events.events;
    },
    eventsSorted() {
      return this.rawEvents
        .map((element, i, array) => {
          element.dateTime = new Date(element.dateTime);
          return element;
        })
        .sort((a, b) => {
          return a.dateTime.getTime() - b.dateTime.getTime();
        });
    },
  },
  methods: {
    incrementMonth() {
      this.render = false;
      this.month++;
      if (this.month > 11) {
        this.year++;
        this.month = 0;
      }
      this.render = true;
    },
    decrementMonth() {
      this.render = false;
      this.month--;
      if (this.month < 0) {
        this.year--;
        this.month = 11;
      }
      this.render = true;
    },
  },
};
</script>
