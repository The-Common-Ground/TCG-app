<template>
  <div
    class="category-container"
    @click="$router.push({ path: '/', query: { q: title } })"
  >
    <v-icon class="icon" :color="color">{{ icon }}</v-icon>
    <div style="display: block">
      <p class="category-title">{{ title }}</p>
      <p class="category-subtitle">{{ subtitle || "Coming Soon..." }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
    icon: String,
    color: String,
  },
};
</script>

<style scoped>
.category-container {
  width: 300px;
  display: flex;
  padding: 10px;
}

.category-container:hover {
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  background-color: #f0f0f0;
}
.icon {
  padding-block: 30px;
  padding-inline: 50px;

  border-radius: 1px;
  margin-block: auto;

  font-size: 50px;
}

.category-title {
  text-align: left;
  font-size: 20px;
  margin-top: 5px;
  margin-bottom: 2px;
  font-weight: 600;
}

.category-subtitle {
  color: #b0b0b0;
  font-size: 15px;
}
</style>
