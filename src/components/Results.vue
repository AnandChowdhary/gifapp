<template>
  <div class="results">
    <div class="container">
      <div v-if="results && results.data && results.data.length">
        <article
          v-for="(item, index) in results.data"
          :key="`${index}${item.id}`"
        >
          {{ item.id }}
        </article>
      </div>
      <div v-else-if="!loading">
        No results
      </div>
      <div v-if="loading">Loading...</div>
    </div>
    <button @click="loadMore">Load more results</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { mapGetters } from "vuex";
import { emptyResult, GIPHYResult } from "@/interfaces";

@Component({
  computed: {
    ...mapGetters(["results"])
  }
})
export default class Results extends Vue {
  loading = false;
  offset = 0;
  results!: GIPHYResult;

  private mounted() {
    this.fetchResults();
  }

  @Watch("$route")
  onRouteChanged() {
    this.offset = 0;
    this.fetchResults();
  }

  private fetchResults() {
    this.loading = true;
    this.$store
      .dispatch("getResults", [this.$route.path, this.offset])
      .then(() => {})
      .catch(() => {})
      .finally(() => (this.loading = false));
  }

  loadMore() {
    this.offset += 5;
    this.fetchResults();
  }
}
</script>

<style scoped lang="scss"></style>
