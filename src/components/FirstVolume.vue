<template>
  <div class="content-row w-100 my-5">
    <div class="volume center" ref="threeContainer"></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import FirstVolume from "@/animations/FirstVolume";

let threeContainer = ref(null);

onMounted(async () => {
  FirstVolume();
});
</script>
