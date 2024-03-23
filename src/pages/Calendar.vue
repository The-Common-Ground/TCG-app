<template>
  <div class="d-flex flex-wrap flex-fill align-center justify-center">
    <CalendarCard
      class="mx-3"
      v-for="(event, i) in eventsSorted"
      :src="event.img"
      :dateTime="event.dateTime"
      :title="event.title"
    ></CalendarCard>
  </div>
</template>

<script>
import dummy from "/public/dummy.json";
import CalendarCard from "../components/CalendarCard.vue";

export default {
  components: {
    CalendarCard,
  },
  data() {
    return {
      rawEvents: toRaw(dummy.events),
    };
  },
  computed: {
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
};
</script>
