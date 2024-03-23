<template>
  <div class="d-flex flex-column flex-fill align-center justify-center">
    <div>
      <p class="text-h4 my-16 header">Upcoming Event</p>
    </div>

    <div class="d-flex">
      <CalendarCard
        class="mx-3"
        v-for="(event, i) in eventsSorted"
        :src="event.img"
        :dateTime="event.dateTime"
        :title="event.title"
      ></CalendarCard>
    </div>
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

<style scoped>
.header {
  border: solid;
  padding: 20px;
}
</style>
