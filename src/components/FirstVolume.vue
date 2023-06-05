<template>
  <GeneralVolumeVue
    Id="first-volume"
    Role="> Riolab"
    Description="Lideré el desarrollo frontend de distintos proyectos de Riolab, entre ellos, el desarrollo de una plataforma de gestión de emprendimientos para la Región de la Araucanía, y su respectiva página web, Araucanía Infinita."
    From="Marzo 2023"
    To="Actualidad"
  ></GeneralVolumeVue>

  <div class="col-9 volume-company position-absolute">
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
