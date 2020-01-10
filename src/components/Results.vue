<template>
  <div class="results">
    <div class="container">
      <div v-if="loading">Loading...</div>
      <div v-else-if="!results || !results.data || !results.data.length">
        No results
      </div>
      <div v-else>
        <article
          v-for="(item, index) in results.data"
          :key="`${index}${item.id}`"
        >
          {{ item.id }}
        </article>
      </div>
    </div>
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
  results!: GIPHYResult;

  private mounted() {
    this.fetchResults();
  }

  @Watch("$route")
  onRouteChanged() {
    this.fetchResults();
  }

  private fetchResults() {
    this.loading = true;
    this.$store
      .dispatch("getResults", this.$route.path)
      .then(() => {})
      .catch(() => {})
      .finally(() => (this.loading = false));
  }
}
</script>

<style scoped lang="scss"></style>
