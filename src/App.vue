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
// Dark theme
$colorBlack: #31001b;

// Light theme
$colorWhite: #fff;
$colorLight1: #dff9fb;
$colorLight2: #c7ecee;
$colorLight3: #95afc0;
$colorLight4: #535c68;

body {
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin: 0;
  color: $colorBlack;
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
.sr-only {
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  width: 1px;
}

header#masthead {
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.25);
  .toggles svg g {
    fill: $colorLight4;
  }
  nav {
    background-color: $colorLight1;
  }
  .slider {
    background-color: $colorLight3;
    &::before {
      background-color: $colorWhite;
    }
  }
  input:checked + .slider {
    background-color: #2196f3;
  }
  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }
}
form.search {
  background-color: $colorLight2;
  button svg path {
    fill: $colorLight4;
  }
}
.card {
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  background-color: $colorWhite;
}
.loading {
  background-color: $colorLight3;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  &::after {
    background: $colorLight3;
  }
  &::before {
    background: linear-gradient(
      to right,
      transparent,
      $colorWhite,
      transparent
    );
  }
  &.loading-card {
    background-color: $colorWhite;
  }
}
.button {
  border: 1px solid $colorLight3;
}
</style>
