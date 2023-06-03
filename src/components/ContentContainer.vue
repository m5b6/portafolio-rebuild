<script setup>
import FirstVolume from "@/components/FirstVolume.vue";
import SecondVolume from "@/components/SecondVolume.vue";
import ThirdVolume from "./ThirdVolume.vue";
import FourthVolume from "./FourthVolume.vue";
import { onMounted } from "vue";
import SetContentHeader from "@/animations/SetContentHeader";
onMounted(() => {
  SetContentHeader();
});
</script>
<template>
  <div
    class="col-10 experience-main-container px-5"
    id="loco"
    data-scroll-container
    style="height: fit-content !important"
  >
    <FirstVolume />
    <SecondVolume  />
    <ThirdVolume />
    <FourthVolume />
    <ThirdVolume  />
  </div>
</template>
