<template>
  <div class="results">
    <div class="container">
      <div v-if="results && results.data && results.data.length">
        <article
          v-for="(item, index) in results.data"
          :key="`${index}${item.id}`"
        >
          <Result :item="item" />
        </article>
      </div>
      <div v-else-if="!loading">
        No results
      </div>
      <div v-if="loading">Loading...</div>
    </div>
    <button class="load-more" @click="loadMore">Load more results</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { mapGetters } from "vuex";
import { emptyResult, GIPHYResult } from "@/interfaces";
import Result from "@/components/Result.vue";

@Component({
  computed: {
    ...mapGetters(["results"])
  },
  components: {
    Result
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

<style scoped lang="scss">
.load-more {
  display: block;
  margin: 2rem auto;
  font: inherit;
  border: 1px solid #ddd;
  padding: 0.5rem 1rem;
  border-radius: 0.2rem;
}
</style>
