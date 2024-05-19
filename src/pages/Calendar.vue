<template>
  <CalendarTable></CalendarTable>
</template>

<script>
import events from "/public/events.json";
import CalendarTable from "../components/CalendarTable.vue";

export default {
  components: {
    CalendarTable,
  },
  props: {
    width: Number,
  },
  data: () => ({
    eventsinJSON: toRaw(events).events,

    type: "month",
    types: ["month", "week", "day"],
    value: [new Date()],
    eventTypes: [
      { title: "Fundraising", color: "blue" },
      { title: "HAPPENING NOW!", color: "red" },
      { title: "External", color: "indigo" },
      { title: "FUN AND GAMES", color: "orange" },
    ],
  }),
  mounted() {
    this.showEvents();
  },
  computed: {},
  methods: {
    showEvents() {
      const events = [];

      for (event of this.eventsinJSON) {
        let eventDateTime = new Date(event.dateTime);
        events.push({
          title: `${eventDateTime.getHours()}:${
            eventDateTime.getMinutes() > 9
              ? eventDateTime.getMinutes()
              : `0${eventDateTime.getMinutes()}`
          } ${event.title}`,
          start: eventDateTime,
          end: eventDateTime,
          color: this.eventTypes.find((eventType) => {
            if (eventType.title === event.labels[0]) {
              return true;
            }
          }).color,
          allDay: false,
        });
      }

      this.events = events;
    },
    getEventColor(event) {
      return event.color;
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    },
  },
};
</script>
