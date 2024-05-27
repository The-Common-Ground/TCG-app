<template>      
  <div class="d-flex flex-column flex-fill">
    <v-carousel cycle hide-delimiters show-arrows="hover">
        <v-carousel-item v-for="(slide, i) in slides">
          <div class="d-flex flex-fill align-center">
            <img class="slide" :src="slide"/>
          </div>

        </v-carousel-item>

      </v-carousel>
    <div class="mx-16 my-10">

      <!-- Search Bar -->
      <v-toolbar class="py-2" color="#00000000" floating>
        <v-icon class="mx-5">mdi-magnify</v-icon>
        <input class="search-bar" placeholder="Search Events" v-model="userSearchContent"></input>

        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn rounded="xl" class="primary-colour-dark mx-5 py-8" v-bind="props">
              <v-icon class="my-n1">mdi-filter</v-icon>
            </v-btn>
          </template>
        </v-menu>
      </v-toolbar>

      <div class="d-flex flex-column flex-fill align-left justify-left" v-if="!showResults">
        <div>
          <p class="text-h4 my-10 font-weight-bold header">Upcoming Event</p>
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

      <!-- Top Categories -->
      <div v-if="!showResults">
        <div>
          <p class="text-h4 my-10 font-weight-bold header">Browse Top Categories</p>
        </div>
      </div>
      
      <div class="mx-3 d-flex flex-wrap" v-if="!showResults">
        <div v-for="(category, i) in topCategories">
            <v-btn elevation="5" class="my-3 mx-1 pa-16 d-flex align-center justify-center">
              <p class="font-weight-bold text-h6">{{ category.name }}</p>
            </v-btn>
        </div>
      </div>
    </div>
    
    
    <EventCard
    v-if="showResults"
      v-for="(event, i) in events"
      class="my-3"
      :name="event.title"
      :description="event.description"
      :labels="event.labels"
      :img="event.img"
    >
  </EventCard>
  </div>
</template>

<script>
import EventCard from "/components/EventCard.vue";
import events from "/public/events.json"
import CalendarCard from "/components/CalendarCard.vue";

export default {
  props: {
    width: Number,
    size: String,
  },
  components: {
    EventCard,
    CalendarCard,
  },
  watch: {
    userSearchContent(newValue, oldValue) {
      if (newValue) {
        this.showResults = true
      } else {
        this.showResults = false
      }
    }
  },
  methods: {
    search(id) {
      console.log(id)
    }
  },
  computed: {
    events() {
      return events.events
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
  data() {
    return {
      showResults: false,
      rawEvents: toRaw(events.events),

      // Carousel 
      slides: ["/slides/volunteering.png", "/slides/NYC.jpg"],

      // Search Bar
      userSearchContent: null,
      userSearchLabel: null,
      
      topCategories: [
        { name: "Environment", id: "Environment" },
        { name: "Elderly", id: "Elderly" },
        { name: "Youth", id: "Youth" },
        { name: "SIV", id: "SIV" },
        { name: "Charity", id: "Charity"},
        { name: "Fundraising", id: "Fundraising" }
      ],
    };
  },
};
</script>

<style>
.search-bar {
  width: 90%;
  padding: 20px 20px;
  margin: 8px 0;
  border: solid;
  border-width: thin;
  border-radius: 10px;
  
  background-color:#fae3ce;
}

.slide {
  width: 100%;
  height: 100%;
  object-fit: contain;
  
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.header {
  border: bottom;
  padding: 20px;
}

</style>
