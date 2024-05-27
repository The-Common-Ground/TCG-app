<template>
  <td
    @mouseover="hoverover()"
    @mouseleave="hoverleave()"
    @mousedown="select()"
    :class="{ hover: hover }"
    v-html="html"
  ></td>
</template>

<script>
export default {
  props: {
    html: String,
    i: Number,
  },
  data() {
    return {
      hover: false,
      selected: false,
    };
  },
  methods: {
    hoverover() {
      this.hover = true;
    },
    hoverleave() {
      this.hover = false;
    },
    select() {
      this.$emit("select-cell", this.i);
    },
  },
};
</script>

<style scoped>
.hover {
  border: solid 2px;
}
</style>
