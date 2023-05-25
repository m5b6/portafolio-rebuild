<script setup>
import HeroSection from "@/components/HeroSection.vue";
/* import SecondSection from "@/components/SecondSection.vue";
 */
import MainSection from "@/components/MainSection.vue";
import NavHeader from "./components/NavHeader.vue";
import CustomCursor from "./animations/CustomCursor";
import { onMounted } from "vue";
import CursorSvg from "@/components/CursorSvg.vue";

onMounted(() => {
  CustomCursor();
});
</script>

<template>
  <div class="bg"></div>
    <CursorSvg />
    <NavHeader />
    <HeroSection />
    <MainSection />
  <!--   <SecondSection />

 -->
</template>

<style lang="scss">
@import url("@/assets/styles/main.scss");
</style>
