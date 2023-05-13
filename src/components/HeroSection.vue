<!-- hero section -->

<script setup>
import HeroAnimation from "@/animations/HeroAnimation";
import { onMounted } from "vue";

onMounted(() => {
  HeroAnimation();
});
</script>

<template>
  <section id="section-1">
    <div
      class="container h-100 d-flex align-items-center justify-content-center"
    >
      <div class="d-flex flex-column align-items-center col-12">
        <h1 data-scroll-container data-scroll-speed="2" class="hero-title-1">
          mati
        </h1>
        <h1 data-scroll-container data-scroll-speed="6" class="hero-title-2">
          berrios
        </h1>
      </div>
    </div>
  </section>
</template>
