<template>
  <v-card class="namecard d-flex flex-column align-center justify-top">
    <div
      class="highlight-box text-center d-flex align-center justify-center"
      :class="{
        admin: mainCommittee === 'Admin' ? true : false,
        design: mainCommittee === 'Design' ? true : false,
        tech: mainCommittee === 'Tech' ? true : false,
      }"
    >
      <p class="text-wrap px-5">{{ roles.join(" / ") }}</p>
    </div>
    <img class="portrait my-8" :src="getSrc(src)" />
    <p class="text-h6 font-weight-bold my-1">{{ name }}</p>
    <p class="text-wrap text-center">{{ description }}</p>
  </v-card>
</template>

<script>
export default {
  props: {
    src: String,
    roles: Array,
    name: String,
    description: String,
    committees: Array,
  },

  methods: {
    getSrc(href) {
      if (href) {
        return href;
      } else {
        return "/default/placeholder.jpg";
      }
    },
  },

  computed: {
    mainCommittee() {
      return this.committees.filter((committee) => {
        if (committee === "Core") {
          return false;
        } else {
          return true;
        }
      })[0];
    },
  },
};
</script>

<style scoped>
.highlight-box {
  height: 80px;
  width: 100%;

  padding-block: 15px;
}

.admin {
  background-color: #f69033;
}

.tech {
  background-color: #919191;
}

.design {
  background-color: #9be7f8;
}

.namecard {
  width: 300px;
  height: 450px;
}

.portrait {
  width: 200px;
  height: 200px;
  border-radius: 100%;
  object-fit: cover;
}
</style>
