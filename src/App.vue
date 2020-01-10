<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Navbar from "@/components/Navbar.vue";

@Component({
  components: {
    Navbar
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
body {
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin: 0;
}
.container {
  margin: 0 auto;
  position: relative;
  max-width: 90%;
  width: 800px;
  .row {
    display: flex;
    > * {
      flex: 1 0 0;
    }
  }
}
a {
  color: blue;
  text-decoration: none;
}
</style>
