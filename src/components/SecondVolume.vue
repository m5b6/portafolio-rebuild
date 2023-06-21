<template>
  <div class="col-9 volume-company inverted position-absolute">
    <div
      data-scroll
      data-scroll-speed="-0.75"
      data-scroll-delay="0.18"
      data-scroll-direction="horizontal"
      class="center"
    >
      <BlobTwo />
    </div>
  </div>
  <GeneralVolumeVue
    Role="Araucanía Infinita"
    Description=""
    From=""
    To=""
    Inverted="true"
    Id="second-volume"
    link="http://dev.araucaniainfinita.cl/entrepreneurs/"
  ></GeneralVolumeVue>
</template>

<script setup>
import GeneralVolumeVue from "./GeneralVolume.vue";
import BlobTwo from "@/assets/svgs/BlobTwo.vue";
</script>
