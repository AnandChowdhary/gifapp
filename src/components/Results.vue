<template>
  <div class="results">
    <div class="container">
      <div v-if="results && results.data && results.data.length">
        <Result
          v-for="(item, index) in results.data"
          :key="`${index}${item.id}`"
          :item="item"
        />
      </div>
      <div v-else-if="!loading">
        No results
      </div>
      <div v-if="loading">
        <div class="loading"></div>
        <div class="loading"></div>
        <div class="loading"></div>
        <div class="loading"></div>
        <div class="loading"></div>
      </div>
      <button
        v-if="results && results.data && results.data.length"
        class="load-more"
        @click="loadMore"
      >
        Load more results
      </button>
    </div>
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
      .dispatch("getResults", [this.$route.path.split("/")[1], this.offset])
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
.loading {
  height: 15rem;
  margin-top: 1rem;
  line-height: 1;
  border-radius: 0.2rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 480px;
    max-width: 100%;
    background: #ddd;
  }
  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    left: -300px;
    top: 0;
    bottom: 0;
    width: 300px;
    background: linear-gradient(to right, transparent, white, transparent);
    animation: shine 1s linear infinite;
  }
}
@keyframes shine {
  0% {
    left: -300px;
  }
  100% {
    left: 480px;
  }
}
</style>
