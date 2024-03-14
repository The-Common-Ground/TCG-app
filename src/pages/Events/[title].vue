<template>
  <div class="page-layout d-flex flex-fill flex-column justify-left">
    <div class="my-5">
      <p class="text-h3 font-weight-bold">This is</p>
      <p class="text-h2">{{ "Project " + title }}</p>
    </div>

    <img :src="srcPath()" />
    <p class="section-header my-8 text-h4">Description</p>
    <p class="mb-10 text-h6">{{ details.description }}</p>

    <div
      class="d-flex flex-fill mt-3 py-3 justify-center"
      style="background-color: #fae3ce; color: black"
    >
      <p class="text-h6">Find out more on</p>

      <v-btn
        v-for="platform in details.platforms"
        class="mx-2"
        @click="redirect(platform.url)"
      >
        {{ platform.platform }}
        <v-icon>{{ platform.icon }}</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: this.$route.params.title,

      details: {
        src: "",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        platforms: [
          {
            platform: "Instagram",
            url: "https://www.instagram.com",
            icon: "mdi-instagram",
          },
          {
            platform: "Official",
            url: "",
            icon: "mdi-web",
          },
        ],
      },
    };
  },

  methods: {
    srcPath() {
      if (this.details.src) {
        return this.src;
      } else {
        return "/default/youth.png";
      }
    },
    redirect(url) {
      console.log(url);
      if (url) {
        const link = document.createElement("a");
        link.href = url;
        link.target = "_blank";
        link.click();
      } else {
        alert("URL not found");
      }
    },
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
