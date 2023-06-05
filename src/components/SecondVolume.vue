<template>
  <div class="col-9 volume-company inverted position-absolute">
    <div
      data-scroll
      data-scroll-speed="-1"
      data-scroll-delay="0.18"
      data-scroll-direction="horizontal"
      class="center"
    >
      <BlobTwo />
    </div>
  </div>
  <GeneralVolumeVue
    Role="Araucanía Infinita <"
    Description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quia, quos, quod voluptate quas voluptatibus quibusdam quae voluptates doloribus quidem."
    From="Marzo 2023"
    To="Actualidad"
    Inverted="true"
    Id="second-volume"
  ></GeneralVolumeVue>
</template>

<script setup>
import GeneralVolumeVue from "./GeneralVolume.vue";
import BlobTwo from "@/assets/svgs/BlobTwo.vue";
</script>
