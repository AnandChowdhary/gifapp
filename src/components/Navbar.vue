<template>
  <header id="masthead">
    <div class="container">
      <div class="row">
        <div class="toggles toggles-l">
          <svg
            aria-hidden="true"
            preserveAspectRatio="none"
            viewBox="0 0 96 96"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill-rule="nonzero">
              <path
                d="M46.1 16.1a2 2 0 001.9 1.3 2 2 0 001.9-1.3l3.9-8.9c.7-1.5.5-3.2-.4-4.5a4.7 4.7 0 00-4-2.2h-2.9a4.8 4.8 0 00-4.4 6.7l4 8.9zM22.6 15.6l7.9 5.8a2 2 0 002.2.1 2 2 0 001-2l-1.1-9.7c-.2-1.6-1.1-3-2.6-3.7a5 5 0 00-4.6.1L23 7.6a4.9 4.9 0 00-2.4 3.9c-.1 1.6.6 3.1 2 4.1zM9.8 32.7l9.7 1.1h.2c.7 0 1.4-.4 1.8-1 .4-.7.4-1.6-.1-2.3l-5.8-7.9c-1-1.3-2.5-2-4.1-1.9-1.6.1-3.1 1-3.9 2.4l-1.5 2.5a4.7 4.7 0 00-.1 4.6 5 5 0 003.8 2.5zM16.1 49.9c.8-.3 1.2-1.1 1.2-1.9 0-.8-.5-1.6-1.2-1.9l-8.9-3.9a4.5 4.5 0 00-4.5.4 4.7 4.7 0 00-2.2 4v2.9c0 1.6.8 3.1 2.2 4a5 5 0 002.6.8 4 4 0 001.9-.4l8.9-4zM21.5 63.3a2 2 0 00-2-1l-9.7 1.1c-1.6.2-3 1.1-3.7 2.6a5 5 0 00.1 4.6L7.6 73a4.9 4.9 0 003.9 2.4h.3a5 5 0 003.9-1.9l5.8-7.9c.4-.7.4-1.6 0-2.3zM30.4 74.6l-7.9 5.8c-1.3 1-2 2.5-1.9 4.1.1 1.6 1 3.1 2.4 3.9l2.5 1.5a5 5 0 004.6.1 4.8 4.8 0 002.6-3.7l1.1-9.7a2 2 0 00-1-2c-.8-.5-1.7-.5-2.4 0zM49.9 79.9c-.3-.8-1.1-1.2-1.9-1.2a2 2 0 00-1.9 1.3l-3.9 8.9c-.7 1.5-.5 3.2.4 4.5a4.7 4.7 0 004 2.2h2.9a4.8 4.8 0 004.4-6.7l-4-9zM73.4 80.4l-7.9-5.8c-.7-.5-1.6-.6-2.3-.1a2 2 0 00-1 2l1.1 9.7c.2 1.6 1.1 3 2.6 3.7a5 5 0 004.6-.1l2.5-1.5a4.9 4.9 0 002.4-3.9c.1-1.5-.6-3-2-4zM86.2 63.3l-9.7-1.1a2 2 0 00-2 1c-.4.7-.4 1.6.1 2.3l5.8 7.9a4.8 4.8 0 003.9 1.9h.3c1.6-.1 3.1-1 3.9-2.4l1.5-2.5c.8-1.4.9-3.1.1-4.6a5.3 5.3 0 00-3.9-2.5zM93.3 42.5c-1.4-.9-3.1-1-4.5-.4L79.9 46c-.8.3-1.2 1.1-1.2 1.9 0 .8.5 1.6 1.2 1.9l8.9 3.9c.6.3 1.3.4 1.9.4a5 5 0 002.6-.8 4.7 4.7 0 002.2-4v-2.9c0-1.5-.8-3-2.2-3.9zM74.5 32.7a2 2 0 001.8 1h.2l9.7-1.1c1.6-.2 3-1.1 3.7-2.6a5 5 0 00-.1-4.6L88.4 23a4.9 4.9 0 00-3.9-2.4c-1.6-.1-3.2.6-4.1 1.9l-5.8 7.9c-.5.7-.5 1.6-.1 2.3zM64.4 21.8c.4 0 .9-.1 1.2-.4l7.9-5.8c1.3-1 2-2.5 1.9-4.1-.1-1.6-1-3.1-2.4-3.9l-2.5-1.5a4.7 4.7 0 00-4.6-.1 4.8 4.8 0 00-2.6 3.7l-1.1 9.7a2 2 0 001 2c.4.3.8.4 1.2.4z"
              />
              <circle cx="48" cy="48" r="24.8" />
            </g>
          </svg>
          <label class="switch">
            <span class="sr-only">{{ $t("navbar.darkThemeEnabled") }}</span>
            <input v-model="darkThemeEnabled" type="checkbox" />
            <span class="slider"></span>
          </label>
          <svg
            aria-hidden="true"
            preserveAspectRatio="none"
            viewBox="0 0 96 96"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill-rule="nonzero">
              <path
                d="M48.7 95.3h-3.2a48 48 0 01-9-94.4 5.8 5.8 0 017.1 6.9 41.6 41.6 0 0040.6 50.8h2.7a5.8 5.8 0 015.8 8 48.2 48.2 0 01-44 28.7zm-11.5-88A41.6 41.6 0 1086.5 65h-2.3a48 48 0 01-47-57.6z"
              />
              <path
                d="M84.2 61.8A44.8 44.8 0 0140.6 7a2.6 2.6 0 00-3.2-3.2 44.8 44.8 0 1052.4 61.3 2.6 2.6 0 00-2.6-3.6l-3 .2z"
              />
            </g>
          </svg>
        </div>
        <div class="logo">
          <router-link to="/">
            <img alt="" src="/img/icon.svg" />
            <span>{{ $t("title") }}</span>
          </router-link>
        </div>
        <div class="toggles toggles-r">
          <svg
            aria-hidden="true"
            preserveAspectRatio="none"
            viewBox="0 0 84 84"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill-rule="evenodd">
              <path d="M84 0v20H0V0zM84 64v20H0V64zM84 32v20H0V32z" />
            </g>
          </svg>
          <label class="switch">
            <span class="sr-only">{{ $t("navbar.threeCol") }}</span>
            <input v-model="threeColumnView" type="checkbox" />
            <span class="slider"></span>
          </label>
          <svg
            aria-hidden="true"
            preserveAspectRatio="none"
            viewBox="0 0 84 84"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill-rule="evenodd">
              <path
                d="M0 0h20v48H0zM0 60h20v24H0zM64 0h20v84H64zM32 0h20v24H32zM32 60h20v24H32zM32 32h20v20H32z"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
    <nav>
      <div class="container">
        <ul>
          <li>
            <router-link to="/@reactions">{{
              $t("navbar.items.reactions")
            }}</router-link>
          </li>
          <li>
            <router-link to="/@entertainment">{{
              $t("navbar.items.entertainment")
            }}</router-link>
          </li>
          <li>
            <router-link to="/@stickers">{{
              $t("navbar.items.stickers")
            }}</router-link>
          </li>
          <li>
            <router-link to="/memes">{{
              $t("navbar.items.memes")
            }}</router-link>
          </li>
          <li>
            <router-link to="/anime">{{
              $t("navbar.items.anime")
            }}</router-link>
          </li>
          <li>
            <router-link to="/cartoons">{{
              $t("navbar.items.cartoons")
            }}</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <Search />
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import Search from "@/components/Search.vue";

@Component({
  components: {
    Search
  }
})
export default class Navbar extends Vue {
  threeColumnView = false;
  darkThemeEnabled = false;

  private created() {
    this.threeColumnView = this.$store.state.threeColumnView;
    this.darkThemeEnabled = this.$store.state.darkThemeEnabled;
  }

  @Watch("threeColumnView")
  onViewPreferenceChanged(value: boolean) {
    this.$store.commit("toggleView", value);
  }

  @Watch("darkThemeEnabled")
  onThemePreferenceChanged(value: boolean) {
    this.$store.commit("toggleTheme", value);
  }
}
</script>

<style scoped lang="scss">
header#masthead {
  line-height: 1;
  .row {
    padding: 1rem 0;
  }
  .toggles {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    &.toggles-l {
      justify-content: flex-start;
    }
    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
  .logo {
    font-weight: bold;
    text-align: center;
    a {
      color: inherit;
      font-size: 200%;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        height: 2.5rem;
        margin-right: 1rem;
      }
    }
  }
  nav {
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      justify-content: space-between;
      overflow-x: auto;
      flex-wrap: nowrap;
      a {
        padding: 1rem 0;
        display: inline-block;
        color: inherit;
        text-transform: uppercase;
      }
      li:not(:first-of-type) a {
        margin-left: 1.5rem;
      }
    }
  }
}
.switch {
  position: relative;
  display: inline-block;
  width: 3rem;
  height: 2rem;
  margin: 0 0.5rem;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 10rem;
  transition: 0.4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 1.5rem;
  width: 1.5rem;
  left: 0.25rem;
  bottom: 0.25rem;
  transition: 0.4s;
  border-radius: 50%;
}
input:checked + .slider:before {
  transform: translateX(1rem);
}
@media (max-width: 500px) {
  header#masthead .toggles-r {
    display: none;
  }
}
</style>
