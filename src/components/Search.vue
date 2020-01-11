<template>
  <form class="search" @submit.prevent="search">
    <div class="container">
      <label class="sr-only" for="search">{{ $t("search.search") }}</label>
      <input
        id="search"
        type="search"
        v-model.trim="query"
        :placeholder="$t('search.placeholder')"
        required
      />
      <button type="submit" :aria-label="$t('search.submit')">
        <svg
          aria-hidden="true"
          preserveAspectRatio="none"
          viewBox="0 0 91 91"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M72.6 63.4a39.6 39.6 0 10-9.2 9.2L80 89.1a6.5 6.5 0 009.2-9.2L72.6 63.4zM14 40.5a26.5 26.5 0 1153 0 26.5 26.5 0 01-53 0z"
            fill-rule="nonzero"
          />
        </svg>
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class Search extends Vue {
  query = "";

  private mounted() {
    this.query = decodeURIComponent(this.$route.path.split("/")[1]);
  }

  search() {
    if (this.query !== this.$route.path.split("/")[1])
      this.$router.push(`/${encodeURIComponent(this.query)}`);
  }

  @Watch("$route")
  onRouteChanged() {
    this.query = decodeURIComponent(this.$route.path.split("/")[1]);
  }
}
</script>

<style scoped lang="scss">
form {
  input,
  button {
    background: none;
    font: inherit;
    border: none;
  }
  button {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    padding: 0;
    svg {
      height: 1.75rem;
      width: 1.75rem;
    }
  }
  input {
    color: inherit;
    padding: 1rem 0;
    box-sizing: border-box;
    width: 100%;
    font-size: 120%;
    // Hide the default webkit search buttons
    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      -webkit-appearance: none;
    }
    // Removing the outline is not a good idea for accessibility, but we're showing the focus state by changing the background color
    outline: none;
  }
}
</style>
