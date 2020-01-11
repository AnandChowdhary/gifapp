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
      <div v-else-if="!loading" class="empty-state">
        <img alt="" src="/img/undraw_empty_xct9.svg" />
        <h1>No results</h1>
        <p>We couldn't find any results for your search query.</p>
      </div>
      <div v-if="loading">
        <div class="loading"></div>
        <div class="loading"></div>
        <div class="loading"></div>
        <div class="loading"></div>
        <div class="loading"></div>
      </div>
      <button
        v-show="!loading && results && results.data && results.data.length"
        class="load-more"
        ref="loadMoreButton"
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
  intersectionObserver?: IntersectionObserver;

  private mounted() {
    this.fetchResults();
    this.setupObserver();
  }

  private stopObserver() {
    if (this.intersectionObserver) this.intersectionObserver.disconnect();
    this.intersectionObserver = undefined;
  }

  private beforeDestroy() {
    this.stopObserver();
  }

  private setupObserver() {
    if ("IntersectionObserver" in window && "requestAnimationFrame" in window) {
      let tried = false;
      this.intersectionObserver = new IntersectionObserver(entries => {
        if (tried) return;
        let intersecting = false;
        entries.forEach(entry => {
          if (entry.isIntersecting) intersecting = true;
        });
        if (intersecting) tried = true;
        else return;
        this.loadMore()
          .then(() => window.requestAnimationFrame(this.setupObserver))
          .catch(error => {})
          .finally(() => this.stopObserver());
      });
      const button = document.querySelector(".load-more");
      if (button) this.intersectionObserver.observe(button);
    }
  }

  @Watch("$route")
  onRouteChanged() {
    this.offset = 0;
    this.fetchResults();
  }

  private fetchResults() {
    return new Promise((resolve, reject) => {
      this.loading = true;
      this.$store
        .dispatch("getResults", [this.$route.path.split("/")[1], this.offset])
        .then(() => resolve())
        .catch(error => reject(error))
        .finally(() => (this.loading = false));
    });
  }

  async loadMore() {
    this.offset += 5;
    return await this.fetchResults();
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
.empty-state {
  text-align: center;
  img {
    width: 50%;
    margin-top: 2.5rem;
  }
}
</style>
