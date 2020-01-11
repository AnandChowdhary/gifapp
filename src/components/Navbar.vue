<template>
  <header id="masthead">
    <div class="container">
      <div class="row">
        <div>1</div>
        <div class="logo">
          <router-link to="/">
            <img alt="" src="/img/icon.svg" />
            <span>GIFAPP</span>
          </router-link>
        </div>
        <div class="toggles">
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
            <span class="sr-only">Turn on 3-column view</span>
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
          <li><router-link to="/@reactions">Reactions</router-link></li>
          <li><router-link to="/@entertainment">Entertainment</router-link></li>
          <li><router-link to="/@stickers">Stickers</router-link></li>
          <li><router-link to="/memes">Memes</router-link></li>
          <li><router-link to="/anime">Anime</router-link></li>
          <li><router-link to="/cartoons">Cartoons</router-link></li>
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
  @Watch("threeColumnView")
  onViewPreferenceChanged(value: boolean) {
    this.$store.commit("toggleView", value);
  }
}
</script>

<style scoped lang="scss">
header#masthead {
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.25);
  line-height: 1;
  .row {
    padding: 1rem 0;
  }
  .toggles {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    svg {
      width: 1.25rem;
      height: 1.25rem;
      g {
        fill: #000;
      }
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
    background-color: #eee;
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
  background-color: #ccc;
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
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}
input:checked + .slider {
  background-color: #2196f3;
}
input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}
input:checked + .slider:before {
  transform: translateX(1rem);
}
</style>
