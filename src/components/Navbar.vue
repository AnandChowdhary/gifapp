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
          1 col/3 cols
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
import { Component, Prop, Vue } from "vue-property-decorator";
import Search from "@/components/Search.vue";

@Component({
  components: {
    Search
  }
})
export default class Navbar extends Vue {}
</script>

<style scoped lang="scss">
header#masthead {
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.25);
  line-height: 1;
  .row {
    padding: 1rem 0;
  }
  .toggles {
    text-align: right;
  }
  .logo {
    text-align: center;
    a {
      font-weight: bold;
      color: #31001b;
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
      a {
        padding: 1rem 0;
        display: inline-block;
        color: inherit;
        text-transform: uppercase;
      }
    }
  }
}
</style>
