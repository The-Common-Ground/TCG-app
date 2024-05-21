<template>
  <div class="d-flex flex-fill flex-column justify-center align-center">
    <p color="black" class="text-h3 my-10">Our Team</p>
    <v-tabs v-model="committeeSelected">
      <v-tab value="Core">Core</v-tab>
      <v-tab value="Admin">Admin</v-tab>
      <v-tab value="Design">Design</v-tab>
      <v-tab value="Tech">Tech</v-tab>
    </v-tabs>
    <div class="d-flex flex-fill flex-wrap justify-center align-center">
      <NameCard
        class="my-3 mx-1"
        v-for="(member, i) in teamDisplay"
        :name="member.name"
        :description="member.description"
        :roles="member.roles"
        :src="member.src"
        :committees="member.committees"
      ></NameCard>
    </div>
  </div>
</template>

<script>
import NameCard from "../components/NameCard.vue";

export default {
  components: {
    NameCard,
  },
  methods: {
    filterByCommittee(array, committee) {
      return array.filter((element) => {
        if (element.committees.includes(committee)) {
          return true;
        } else {
          return false;
        }
      });
    },
  },
  watch: {
    committeeSelected(current, previous) {
      if (current != previous) {
        if (current === "Core") {
        }
      }
    },
  },
  computed: {
    core() {
      return this.filterByCommittee(this.members, "Core");
    },
    admin() {
      return this.filterByCommittee(this.members, "Admin");
    },
    design() {
      return this.filterByCommittee(this.members, "Design");
    },
    tech() {
      return this.filterByCommittee(this.members, "Tech");
    },
    teamDisplay() {
      switch (this.committeeSelected) {
        case "Core":
          return this.core;
        case "Admin":
          return this.admin;
        case "Design":
          return this.design;
        case "Tech":
          return this.tech;
      }
    },
  },
  data() {
    return {
      committeeSelected: "Core",

      members: [
        {
          name: "Harry Cheong",
          description: "Tech Enthusiast",
          committees: ["Core", "Tech"],
          roles: ["Development OIC", "Full-Stack Developer"],
          src: "/members/harry.jpeg",
        },
        {
          name: "Jeremy Tan",
          description: "Academic Weapon",
          committees: ["Core", "Admin"],
          roles: ["Administrative OIC"],
          src: "/members/jeremy.jpg",
        },
        {
          name: "Ze Dong",
          description: "Technophilic?",
          committees: ["Core", "Tech"],
          roles: ["Tech Lead", "Backend Developer"],
          src: "/members/zedong.jpg",
        },
        {
          name: "Esther Lee",
          description: "Stationery Enthusiast",
          committees: ["Core", "Design"],
          roles: ["Design Lead"],
          src: "/members/esther.jpg",
        },
        {
          name: "Ke Hao",
          description: "For the greater good of humanity",
          committees: ["Core", "Admin"],
          roles: ["Administrative Lead"],
          src: "/members/kehao.jpg",
        },
        {
          name: "Jie Ling",
          description: "I love art",
          committees: ["Core", "Design"],
          roles: ["Design Assistant Lead"],
          src: "/members/jieling.png",
        },
        {
          name: "Yu Heng",
          description: "Chemistry is my passion",
          committees: ["Core", "Admin"],
          roles: ["Social Media Manager"],
          src: "",
        },
        {
          name: "Heng Yi",
          description: "Researcher",
          committees: ["Admin"],
          roles: ["Admin"],
          src: "",
        },
        {
          name: "Tiffany Ho",
          description: "Art Fan",
          committees: ["Design"],
          roles: ["Designer"],
          src: "",
        },
        {
          name: "Ma Weiyi",
          description: "Mathing",
          committees: ["Tech"],
          roles: ["Frontend Developer"],
          src: "",
        },
        {
          name: "Justin Chee",
          description: "See you at BuildingBloCs June Conference",
          committees: ["Tech"],
          roles: ["Backend Developer"],
          src: "/members/justin.jpg",
        },
      ],
    };
  },
};
</script>
