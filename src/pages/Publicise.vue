<template>
  <div class="pa-16">
    <p class="text-h2 py-5">How to publicise your events?</p>
    <div class="mt-5 mb-10">
      <p class="text-h6 my-3" v-for="(detail, i) in details">
        {{ detail.text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      details: [
        {
          text: "Listing your project on our website is a great way to publicise it",
        },
        {
          text: "Fill in the folllowing Google Form to list your project",
        },
        { text: "1. Submit a brief description of your project" },
        {
          text: "2. Submit the text and images you would like us to put up on TCG",
        },
      ],
    };
  },
};
</script>
