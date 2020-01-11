<template>
  <div class="results">
    <div class="container">
      <div v-if="hasError" class="info-state info-state-error">
        <img alt="" src="/img/undraw_bug_fixing_oc7a.svg" />
        <h1>{{ $t("error.title") }}</h1>
        <p>{{ $t("error.intro") }}</p>
        <div>
          <button class="button" @click="tryAgain">
            {{ $t("error.tryAgain") }}
          </button>
        </div>
      </div>
      <div v-else-if="results && results.data && results.data.length">
        <div v-if="threeColumnView" class="row three-cols">
          <div>
            <Result
              size="small"
              v-for="(item, index) in resultsInColumns[1]"
              :key="`${index}${item.id}`"
              :item="item"
            />
          </div>
          <div>
            <Result
              size="small"
              v-for="(item, index) in resultsInColumns[2]"
              :key="`${index}${item.id}`"
              :item="item"
            />
          </div>
          <div>
            <Result
              size="small"
              v-for="(item, index) in resultsInColumns[3]"
              :key="`${index}${item.id}`"
              :item="item"
            />
          </div>
        </div>
        <div v-else>
          <Result
            v-for="(item, index) in results.data"
            :key="`${index}${item.id}`"
            :item="item"
          />
        </div>
      </div>
      <div v-else-if="!loading" class="info-state info-state-empty">
        <img alt="" src="/img/undraw_empty_xct9.svg" />
        <h1>{{ $t("emptyState.title") }}</h1>
        <p>{{ $t("emptyState.intro") }}</p>
      </div>
      <div v-if="loading">
        <div class="loading loading-card"></div>
        <div class="loading loading-card"></div>
        <div class="loading loading-card"></div>
        <div class="loading loading-card"></div>
        <div class="loading loading-card"></div>
      </div>
      <button
        v-show="
          !hasError &&
            !loading &&
            results &&
            results.data &&
            results.data.length
        "
        class="button load-more"
        ref="loadMoreButton"
        @click="loadMore"
      >
        {{ $t("loadMore") }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { mapGetters } from "vuex";
import { emptyResult, GIPHYResult, GIPHYItem } from "@/interfaces";
import Result from "@/components/Result.vue";

@Component({
  computed: {
    ...mapGetters(["results", "threeColumnView"])
  },
  components: {
    Result
  }
})
export default class Results extends Vue {
  loading = false;
  hasError = false;
  offset = 0;
  results!: GIPHYResult;
  threeColumnView!: boolean;
  intersectionObserver?: IntersectionObserver;
  resultsInColumns: {
    [index: number]: GIPHYItem[];
  } = {
    1: [],
    2: [],
    3: []
  };

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
        if (this.results && this.results.data && this.results.data.length >= 9)
          this.loadMore()
            .then(() => window.requestAnimationFrame(this.setupObserver))
            .catch(() => (this.hasError = true))
            .finally(() => this.stopObserver());
      });
      const button = document.querySelector(".load-more");
      if (button) this.intersectionObserver.observe(button);
    }
  }

  @Watch("results")
  onResultsUpdated() {
    if (!this.results || !this.results.data || !this.results.data.length)
      return;
    const data = this.results.data;
    const N = Math.floor(data.length / 3);
    const col1: GIPHYItem[] = [];
    const col2: GIPHYItem[] = [];
    const col3: GIPHYItem[] = [];
    data.forEach((item, index) => {
      if (index < N) {
        col1.push(item);
      } else if (index < N * 2) {
        col2.push(item);
      } else {
        col3.push(item);
      }
    });
    this.resultsInColumns = {
      1: col1,
      2: col2,
      3: col3
    };
  }

  @Watch("$route")
  onRouteChanged() {
    this.offset = 0;
    this.fetchResults();
  }

  private fetchResults() {
    return new Promise(resolve => {
      this.loading = true;
      this.$store
        .dispatch("getResults", [this.$route.path.split("/")[1], this.offset])
        .catch(() => (this.hasError = true))
        .finally(() => {
          this.loading = false;
          resolve();
        });
    });
  }

  async loadMore() {
    this.offset += 5;
    return await this.fetchResults();
  }

  tryAgain() {
    location.reload();
  }
}
</script>

<style scoped lang="scss">
.button {
  display: block;
  margin: 2rem auto;
  font: inherit;
  padding: 0.5rem 1rem;
  border-radius: 0.2rem;
}
.loading {
  height: 15rem;
  margin-top: 1rem;
  line-height: 1;
  border-radius: 0.2rem;
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
  }
  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    left: -300px;
    top: 0;
    bottom: 0;
    width: 300px;
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
.info-state {
  text-align: center;
  img {
    width: 50%;
    margin-top: 2.5rem;
  }
}
.three-cols > div:nth-child(2) {
  margin: 0 1rem;
}
</style>
