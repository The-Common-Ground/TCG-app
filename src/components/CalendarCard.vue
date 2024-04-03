<template>
  <v-card
    class="calendar-card"
    :image="imgDisplay(src)"
    :href="`/events/${title}`"
    hover
  >
    <div class="label">
      <p class="text-h6 text-wrap text-center pa-2">{{ timeDisplay }}</p>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    title: String,
    src: String,
    dateTime: Date,
  },

  data() {
    return {
      options: {
        dateStyle: "medium",
        timeStyle: "short",
      },
    };
  },
  methods: {
    imgDisplay(src) {
      if (src) {
        return src;
      } else {
        return "/default/placeholder.jpg";
      }
    },
  },
  computed: {
    timeDisplay() {
      return ` ${new Intl.DateTimeFormat(
        navigator.language,
        this.options
      ).format(this.dateTime)}`;
    },
  },
};
</script>

<style scoped>
.calendar-card {
  width: 300px;
  height: 200px;
}

.calendar-img {
  width: 100%;
  height: 100%;
}

.label {
  background-color: white;
  opacity: 80%;

  width: 150px;
}
</style>
