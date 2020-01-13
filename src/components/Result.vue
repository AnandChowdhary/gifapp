<template>
  <article :class="`card card--size-${size}`">
    <video
      :src="item.images.original_mp4.mp4"
      loading="lazy"
      :autoplay="autoplay"
      :controls="!autoplay"
      loop
    ></video>
    <div class="loading">
      <svg
        width="38"
        height="38"
        viewbox="0 0 38 38"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#fff"
      >
        <g fill="none" fill-rule="evenodd">
          <g transform="translate(1 1)" stroke-width="2">
            <circle stroke-opacity="0.5" cx="18" cy="18" r="18" />
            <path d="M36 18c0-9.94-8.06-18-18-18">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur="1s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        </g>
      </svg>
    </div>
    <div class="details">
      <h2>{{ item.title }}</h2>
      <div class="date" v-if="date">{{ $t("timeAgo", { date }) }}</div>
      <div class="username" v-if="item.username">
        <img
          alt=""
          :src="
            `https://tse2.mm.bing.net/th?q=${item.username}+logo&w=70&h=70&c=7&rs=1&p=0&dpr=3&pid=1.7&mkt=en-IN&adlt=moderate`
          "
        />
        <a
          target="_blank"
          rel="noopener noreferrer"
          :href="`https://giphy.com/${item.username}/`"
          >@{{ item.username }}</a
        >
      </div>
      <div class="source" v-if="item.source_tld && item.source">
        <img alt="" :src="`https://unavatar.now.sh/${item.source_tld}`" />
        <a target="_blank" rel="noopener noreferrer" :href="item.source">{{
          $t("source", { source: item.source_tld })
        }}</a>
      </div>
      <div class="rating" v-if="item.rating">
        <img
          alt=""
          :src="
            `https://tse2.mm.bing.net/th?q=${item.rating}+rating+icon&w=70&h=70&c=7&rs=1&p=0&dpr=3&pid=1.7&mkt=en-IN&adlt=moderate`
          "
        />
        <span>{{ $t("rated", { rating: item.rating.toUpperCase() }) }}</span>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { GIPHYItem } from "../interfaces";
import { parse, formatDistanceToNow } from "date-fns";
import { capitalizeFirstLetter } from "@/helpers";

@Component({
  computed: {
    autoplay() {
      try {
        // If the user prefers reduced motion, don't auto-play but show controls
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
          return false;
      } catch (error) {}
      return true;
    }
  }
})
export default class Result extends Vue {
  @Prop({ required: true }) private item!: GIPHYItem;
  @Prop({ default: "large" }) private size!: string;

  date = "";

  private created() {
    if (!this.item) return;
    const itemDate = parse(
      this.item.import_datetime,
      "yyyy-MM-dd HH:mm:ss",
      new Date()
    );
    this.date = capitalizeFirstLetter(formatDistanceToNow(itemDate));
  }
}
</script>

<style scoped lang="scss">
video {
  display: block;
  width: 480px;
  max-width: 100%;
  position: relative;
  z-index: 1;
}
.card {
  overflow: hidden;
  position: relative;
  margin-top: 1rem;
  line-height: 1;
  border-radius: 0.2rem;
  display: flex;
  > .details {
    flex: 1 0 0;
    padding: 1.5rem;
  }
}
h2 {
  margin: 0 0 1rem 0;
  line-height: 1.25;
}
img {
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 100%;
  vertical-align: middle;
  margin-right: 0.5rem;
}
.loading {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 480px;
  max-width: 100%;
  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
@media (max-width: 500px) {
  .card {
    display: block;
    .loading {
      display: none;
    }
  }
}
.card--size-small {
  display: block;
  .loading {
    display: none;
  }
}
.date {
  margin-bottom: 1rem;
}
.username,
.source {
  margin-bottom: 0.5rem;
  word-break: break-all;
}
a {
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
}
</style>
