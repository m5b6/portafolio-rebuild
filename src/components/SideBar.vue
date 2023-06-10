<script setup>
import { ref } from "vue";
import HideOneContainerShowAnother from "@/animations/HideOneContainerShowAnother.js";
let activeSection = ref("aboutme");

document.addEventListener("click", (e) => {
  console.log(e.target);

  if (e.target.classList.contains("option")) {
    e.target.classList.add("active");
    e.target.classList.add("bounce"); // add bounce animation class
    [...document.getElementsByClassName("option")].forEach((element) => {
      if (element != e.target) {
        element.classList.remove("active");
        element.classList.remove("bounce"); // remove bounce animation class from other elements
      }
    });
  }
});

const sidebarAction = (name) => {
  HideOneContainerShowAnother(activeSection.value, name);
  activeSection.value = name;
};
</script>

<template>
  <div
    class="option option-1 inverted-animation hover-underline-animation active"
    @click="sidebarAction('start')"
  >
    inicio
  </div>
  <div
    class="option option-2 inverted-animation hover-underline-animation"
    @click="sidebarAction('experience')"
  >
    experiencia
  </div>
  <div
    class="option option-3 inverted-animation hover-underline-animation"
    @click="sidebarAction('aboutme')"
  >
    sobre mí
  </div>
  <div class="option option-4 inverted-animation hover-underline-animation">
    contacto
  </div>
</template>
