<template>
  <div class="upcoming-card" @click="$router.push(`${title}`)">
    <img class="upcoming-img" :src="imgDisplay()" />
    <div class="upcoming-content">
      <p class="content-title">{{ title }}</p>
      <p><v-icon>mdi-map-marker-outline</v-icon>{{ location }}</p>
      <p><v-icon>mdi-clock</v-icon>{{ timeDisplay }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    src: String,
    dateTime: Date,
    location: String,
  },

  data() {
    return {
      options: {
        weekday: "short", // abbreviated day of the week (e.g., "Tue")
        day: "numeric", // numeric day (e.g., "27")
        month: "short", // abbreviated month name (e.g., "Jan")
        hour: "numeric", // hour in 12-hour format (e.g., "5")
        minute: "2-digit", // minute with leading zeros (e.g., "30")
        hour12: true,
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
@media only screen and (min-width: 0px) {
  .upcoming-card {
    width: 350px;

    display: flex;
    align-items: center;
  }

  .upcoming-card:hover {
    background-color: #f0f0f0;
  }

  .upcoming-img {
    width: 140px;
    height: 130px;
  }

  .upcoming-content {
    padding-inline: 10px;
    font-size: 14px;
  }
  .content-title {
    font-weight: 550;
  }

  .label {
    background-color: white;
    opacity: 80%;

    width: 150px;
  }
}
</style>
