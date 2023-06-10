<script setup>
import ExperienceSection from "./ExperienceSection.vue";
import StartSection from "./StartSection.vue";
import AboutMe from "./AboutMe.vue";
</script>
<template>
  <div
    class="col-10 px-5"
    id="loco"
    data-scroll-container
    style="height: fit-content !important"
  >

    <StartSection />
    <ExperienceSection />
    <AboutMe />

  </div>
</template>
