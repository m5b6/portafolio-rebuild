<template>
  <GeneralVolumeVue
    Id = "first-volume"
    Role="> Riolab"
    Description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quia, quos, quod voluptate quas voluptatibus quibusdam quae voluptates doloribus quidem."
    From="Marzo 2023"
    To="Actualidad"
    HeaderMethod="FirstVolume()"
  ></GeneralVolumeVue>

  <div class="col-9 volume-company position-absolute">
    <!-- img from picsum -->
    <div
      data-scroll
      data-scroll-speed="1"
      data-scroll-delay="0.18"
      data-scroll-direction="horizontal"
      class="center"
    >
      <BlobOne />
    </div>
  </div>
</template>

<script setup>
import BlobOne from "@/assets/svgs/BlobOne.vue";
import GeneralVolumeVue from "./GeneralVolume.vue";
</script>
