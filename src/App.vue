<script setup>
/* import HeroSection from "@/components/HeroSection.vue";
 */ /* import SecondSection from "@/components/SecondSection.vue";
 */
import MainSection from "@/components/MainSection.vue";
/* import NavHeader from "./components/NavHeader.vue";
 */
import { onMounted } from "vue";
import { Gradient } from "@/utils/Gradient.js";

onMounted(() => {
  // Create your instance
  const gradient = new Gradient();

  // Call `initGradient` with the selector to your canvas
  gradient.initGradient("#gradient-canvas");
});
</script>

<template>
  <div id="bg"></div>
  <canvas id="gradient-canvas" data-transition-in />

  <!--   <HeroSection />
 -->
  <MainSection />
  <!--   <SecondSection />

 -->
</template>

<style lang="scss">
@import url("@/assets/styles/main.scss");
</style>
