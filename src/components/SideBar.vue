<template>
  <div class="option option-1 inverted-animation hover-underline-animation" @click="test">inicio</div>
  <div class="option option-2 inverted-animation hover-underline-animation">experiencia</div>
  <div class="option option-3 inverted-animation hover-underline-animation">sobre mí</div>
  <div class="option option-4 inverted-animation hover-underline-animation">contacto</div>
</template>

<script setup>
let test = () => {
  console.log("click");
};
</script>