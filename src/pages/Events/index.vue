<template>      
  <div class="d-flex flex-column flex-fill"><v-carousel cycle hide-delimiters show-arrows="hover">
        <v-carousel-item v-for="(slide, i) in slides">
          <div class="d-flex flex-fill justify-center">
            <img class="slide" :src="slide"/>
          </div>

        </v-carousel-item>

      </v-carousel>
    <div class="mx-16 my-10">

      <!-- Search Bar -->
      <div class="d-flex justify-center align-center">
        <input class="search-bar" placeholder="Search Events" v-model="userSearchContent"></input>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn rounded="xl" class="primary-colour-dark mx-5 py-8" v-bind="props">
              <v-icon class="my-n1">mdi-filter</v-icon>
            </v-btn>
          </template>

          <v-btn
            v-for="label in labels"
            @click="search(label.id)"
            variant="outlined"
            height="50"
            width="200"
            class="text-center primary-colour"
          >{{ label.name }}
          </v-btn>
        </v-menu>
      </div>

      <!-- Top Categories -->
      <p v-if="!showResults" class="my-8 mx-2 text-h4 font-weight-bold">Top Categories</p>

      <div v-if="!showResults" class="d-flex flex-wrap flex-fill justify-center">
        <div v-for="label in labels" class="top-category-btn text-h6" @click="alert('Clicked')">
          <v-btn variant="text" style="padding: 50%">{{ label.name }}</v-btn>
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
    ></EventCard>
  </div>
</template>

<script>
import EventCard from "../components/EventCard.vue";
import dummy from "/public/dummy.json"

export default {
  components: {
    EventCard,
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
      return dummy.events
    }
  },
  data() {
    return {
      showResults: false,
      
      // Carousel 
      slides: dummy.eventSlides,

      // Search Bar
      userSearchContent: null,
      userSearchLabel: null,
      
      labels: [
        { name: "Environment", id: "Environment" },
        { name: "Elderly", id: "Elderly" },
        { name: "Youth", id: "Youth" },
        { name: "SIV", id: "SIV" },
        {name: "Charity", id: "Charity"},
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

.top-category-btn {
  width: 45%;
  margin: 10px;
  background: #D9D9D9;

  text-align: center;
}

.slide {
  width: 100%;
  object-fit: fill;
}
</style>
