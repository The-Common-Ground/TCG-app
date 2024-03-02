<template>
  <div class="d-flex flex-column">
    <div class="mx-16 my-10 d-flex justify-center align-center">
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
    
    <EventCard
      v-for="(event, i) in events"
      class="my-3"
      :name="event.name"
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
      console.log(newValue);
    }
  },
  methods: {
    search(id) {
      console.log(id)
    }
  },
  data() {
    return {
      userSearchContent: null,
      userSearchLabel: null,

      labels: [
        { name: "Environment", id: "Environment" },
        { name: "Elderly", id: "Elderly" },
        { name: "Youth", id: "Youth" },
        { name: "SIV", id: "SIV" },
        { name: "Fundraising", id: "Fundraising" }
      ],
      events: [
        {
          name: "Project ABC",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          labels: ["SIV", "Fundraising"],
          img: "",
        },
        {
          name: "Project ABC",
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
</style>
