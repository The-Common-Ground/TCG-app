<template>
  <div
    v-if="this.event"
    class="page-layout d-flex flex-fill flex-column justify-left"
  >
    <div class="my-5">
      <p class="text-h3 font-weight-bold">This is</p>
      <p class="text-h2">{{ "Project " + title }}</p>
    </div>

    <img :src="srcPath(event.img)" />
    <p class="section-header my-8 text-h4">Description</p>
    <p class="mb-10 text-h6">{{ event.description }}</p>

    <div
      class="d-flex flex-fill mt-3 py-3 justify-center"
      style="background-color: #fae3ce; color: black"
    >
      <p class="text-h6">Find out more on</p>

      <v-btn
        v-for="platform in event.platforms"
        class="mx-2"
        @click="redirect(platform.url)"
      >
        {{ platform.title }}
        <v-icon>{{ platform.icon }}</v-icon>
      </v-btn>
    </div>
  </div>
  <div v-else>
    <NotFound></NotFound>
  </div>
</template>

<script>
import events from "/public/events.json";
import NotFound from "/components/NotFound.vue";

export default {
  components: {
    NotFound,
  },

  data() {
    return {
      title: this.$route.params.title,
    };
  },

  methods: {
    srcPath(src) {
      if (src) {
        return src;
      } else {
        return "/default/placeholder.jpg";
      }
    },
    redirect(url) {
      if (url) {
        const link = document.createElement("a");
        link.href = url;
        link.target = "_blank";
        link.click();
      } else {
        alert("URL not found");
      }
    },
    pageExists() {
      return events.events.find((element) => {
        if (element.title === this.title) {
          return true;
        }
      });
    },
  },
  beforeMount() {
    this.event = this.pageExists();
  },
};
</script>

<style>
.page-layout {
  margin-block: 100px;
  margin-inline: 10%;
}

.section-header {
  width: fit-content;
  border-bottom: solid;
  border-width: thin;
}
</style>
