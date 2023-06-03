<script setup>
/* import HeroSection from "@/components/HeroSection.vue";
 */ /* import SecondSection from "@/components/SecondSection.vue";
 */
import MainSection from "@/components/MainSection.vue";
/* import NavHeader from "./components/NavHeader.vue";
 */
import { onMounted } from "vue";
import { Gradient } from "@/utils/Gradient.js";
import Welcome from "@/animations/Welcome.js";

onMounted(() => {
  const gradient = new Gradient();
  gradient.initGradient("#gradient-canvas");
  Welcome();
});
</script>

<template>
  <canvas id="gradient-canvas" data-transition-in />

  <div id="bg"></div>

  <div id="welcome" class="center flex-column">
    <div class="welcome-txt-1">hello</div>
    <div class="welcome-txt-2">my name is mati</div>
  </div>
  <div id="sections">
    <!--   <HeroSection />
 -->
    <MainSection />
    <!--   <SecondSection />

 -->
  </div>
</template>

<style lang="scss">
@import url("@/assets/styles/main.scss");
</style>
