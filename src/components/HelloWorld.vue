<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ $t("hello") }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped lang="scss">
//
</style>
