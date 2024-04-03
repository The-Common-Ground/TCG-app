<template>
  <div class="d-flex flex-column">
    <v-card
      variant="flat"
      class="text-center"
      style="margin: 100px"
      max-width="1000"
    >
      <v-card-title class="text-wrap">
        <p class="text-h3 my-10">At TCG, we design, code and manage</p>

        <p class="text-h6 text-subtitle-1 pt-4">
          TCG is built by students, for students. All of our code and designs
          are open-source. If you are an aspiring developer/designer, we look
          forward to welcoming you to our team. For enquiries, email
          the_common_ground@dhs.edu.sg
        </p>
      </v-card-title>

      <div class="my-10">
        <v-btn
          variant="outlined"
          density="default"
          width="150"
          class="mx-3"
          @click="pushLink('https://github.com/The-Common-Ground')"
        >
          <v-icon class="pr-2"> mdi-github</v-icon>
          Github
        </v-btn>
        <v-btn
          variant="outlined"
          density="default"
          width="150"
          @click="
            pushLink(
              'https://www.figma.com/file/l56DrGjRTymHebz9TelsYk/TCG-Design?type=design&node-id=0%3A1&mode=design&t=W2OoyMHqtcyV7fRB-1'
            )
          "
        >
          <v-icon class="pr-2"> mdi-draw </v-icon>
          Figma
        </v-btn>
      </div>
    </v-card>

    <p class="text-h3 pb-8 text-center">Our Tech Stack</p>
    <v-carousel
      show-arrows="hover"
      height="100%"
      width="90%"
      hide-delimiter-background
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-card
          class="d-flex flex-fill flex-column text-center justify-center"
          color="black"
          rounded="xl"
          flex
        >
          <div class="d-flex justify-center pt-10">
            <v-icon class="pr-5 pt-4">mdi-code-tags</v-icon>
            <p class="text-h4">{{ slide.name }}</p>
          </div>

          <div class="py-10">
            <div class="d-flex justify-center flex-wrap">
              <tech-card
                v-for="(tech, i) in slide.items"
                :title="tech.title"
                :subtitle="tech.subtitle"
                :icon="tech.icon"
              >
              </tech-card>
            </div>
          </div>
        </v-card>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import TechCard from "../components/TechCard.vue";

export default {
  data() {
    return {
      slides: [
        {
          name: "Frontend",
          items: [
            {
              icon: "tech/js.png",
              iconStyle: "normal",
              title: "JavaScript",
              subtitle: "Programming Language",
            },
            {
              icon: "tech/vue.png",
              iconStyle: "normal",
              title: "Vuejs",
              subtitle:
                "In conjunction with nuxt.js and vuetify, vuejs forms the backbone of our frontend",
            },
            {
              icon: "tech/nuxt.png",
              title: "Nuxtjs",
              subtitle:
                "Nuxtjs is a Vue framework that makes web development intuitive and powerful",
            },
            {
              icon: "tech/firebase.png",
              title: "Firebase",
              subtitle:
                "Firebase is a backend cloud computing services and application platform provided by Google",
            },
          ],
        },
        {
          name: "Backend",
          items: [
            {
              icon: "tech/python.png",
              title: "Python",
              subtitle: "Programming Language",
            },
            {
              icon: "tech/fastapi.png",
              title: "FastAPI",
              subtitle:
                "FastAPI is a modern web framework for builidng RESTful APIs in Python.",
            },
            {
              icon: "tech/mongodb.png",
              title: "MongoDB",
              subtitle:
                "MongoDB is a cross-platform document-oriented database program.",
            },
            {
              icon: "tech/gcloud.png",
              title: "Google Cloud",
              subtitle:
                "Google Cloud Run, offered by Google Cloud, is used to containerize, deploy our server application.",
            },
          ],
        },
        {
          name: "Development Tools",
          items: [
            {
              icon: "tech/actions.png",
              title: "Github Actions",
              subtitle:
                "Github Actions makes it easy to automate software workflows, with CI/CD.",
            },
            {
              icon: "tech/docker.png",
              title: "Docker",
              subtitle:
                "Docker help developers build, share, and run container applications.",
            },
          ],
        },
      ],
    };
  },
  components: { TechCard },
  methods: {
    pushLink(href) {
      const link = document.createElement("a");
      link.href = href;
      link.target = "__blank";
      link.click();
    },
  },
};
</script>
<style>
.contribute-ad {
  box-sizing: border-box;
  padding: 85px;
}

.tech-stack {
  padding-top: 100px;
  padding-bottom: 100px;
}

.icon {
  width: 80px;
  height: 80px;
}
</style>
