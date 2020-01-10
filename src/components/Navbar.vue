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
          <li><router-link to="/@memes">Memes</router-link></li>
          <li><router-link to="/@artists">Artists</router-link></li>
          <li><router-link to="/@cartoons">Cartoons</router-link></li>
        </ul>
      </div>
    </nav>
    <form class="search">
      <div class="container">
        <label for="search">Search</label>
        <input
          id="search"
          type="search"
          placeholder="Search for all the GIFs in the world..."
          required
        />
        <button type="submit" aria-label="Submit">
          <svg
            aria-hidden="true"
            preserveAspectRatio="none"
            viewBox="0 0 91 91"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M72.6 63.4a39.6 39.6 0 10-9.2 9.2L80 89.1a6.5 6.5 0 009.2-9.2L72.6 63.4zM14 40.5a26.5 26.5 0 1153 0 26.5 26.5 0 01-53 0z"
              fill-rule="nonzero"
            />
          </svg>
        </button>
      </div>
    </form>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
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
form.search {
  background-color: #aaa;
  label {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    width: 1px;
  }
  input,
  button {
    background: none;
    font: inherit;
    border: none;
  }
  button {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    padding: 0;
    svg {
      height: 1.75rem;
      width: 1.75rem;
      path {
        fill: #000;
      }
    }
  }
  input {
    padding: 1rem 0;
    box-sizing: border-box;
    width: 100%;
    font-size: 120%;
    // Hide the default webkit search buttons
    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      -webkit-appearance: none;
    }
    // Removing the outline is not a good idea for accessibility, but we're showing the focus state by changing the background color
    outline: none;
  }
}
</style>
