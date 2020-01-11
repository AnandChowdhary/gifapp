<template>
  <article class="card">
    <video
      :src="item.images.original_mp4.mp4"
      loading="lazy"
      autoplay
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
      <div>{{ item.username }}</div>
      <div>{{ item.import_datetime }}</div>
      <img
        class="rating"
        :alt="`Rated ${item.rating}`"
        :src="
          `https://tse2.mm.bing.net/th?q=${item.rating}+rating+icon&w=70&h=70&c=7&rs=1&p=0&dpr=3&pid=1.7&mkt=en-IN&adlt=moderate`
        "
      />
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { GIPHYItem } from "../interfaces";

@Component
export default class Result extends Vue {
  @Prop({ required: true }) private item!: GIPHYItem;
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
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
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
.rating {
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 100%;
  margin-top: 1rem;
}
.loading {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 480px;
  max-width: 100%;
  background-color: #ddd;
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
</style>
