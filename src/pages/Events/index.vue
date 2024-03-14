<template>
  <div class="d-flex flex-column flex-fill">
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
      <p v-if="!showResults" class="my-8 text-h4 font-weight-bold" >Top Categories</p>
      <div v-if="!showResults" class="d-flex flex-wrap flex-fill">
      
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
  data() {
    return {
      showResults: false,

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
      
      // Dummy Data
      events: [
        {
          title: "ABC",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          labels: ["SIV", "Fundraising"],
          img: "",
        },
        {
          title: "XYZ",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          labels: ["SIV", "Fundraising"],
          img: "",
        },
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
  width: 30%;
  margin: 10px;
  background: #D9D9D9;
  aspect-ratio: 1/1;

  text-align: center;

}
</style>
