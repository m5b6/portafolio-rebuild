<script setup>
import { gsap } from "gsap";
const chooseOptionAndRemoveOthersAndRemoveOthers = (optionNumber) => {
  let optionsSelectors = [".option-1", ".option-2", ".option-3", ".option-4"];

  let selectedOption = `.option-${optionNumber}`;
  

  let tl = gsap.timeline({
    defaults: {
      duration: 0.5,
      ease: "power2.inOut",
    },
    onComplete: () => {
      gsap.to(selectedOption, {
        top: "20vh"
      });
    },
  });
  optionsSelectors.forEach((selector) => {
    if (selector !== selectedOption) {
      tl.to(
        selector,
        {
          opacity: 0,
          marginLeft: 20,
          scale: 0.8,
        },
        "<"
      );
    }
  });
};
</script>

<template>
  <section class="main-section">
    <div
      class="container d-flex flex-column skew-container-2 justify-content-between options-container"
    >
      <div
        class="option option-1 skew-2"
        @click="chooseOptionAndRemoveOthersAndRemoveOthers(1)"
      >
        inicio
        <div class="option-fill"><p class="inverted-content">inicio</p></div>
      </div>
      <div
        class="option option-2"
        @click="chooseOptionAndRemoveOthersAndRemoveOthers(2)"
      >
        experiencia
        <div class="option-fill">
          <p class="inverted-content">experiencia</p>
        </div>
      </div>
      <div
        class="option option-3"
        @click="chooseOptionAndRemoveOthersAndRemoveOthers(3)"
      >
        sobre mí
        <div class="option-fill"><p class="inverted-content">sobre mí</p></div>
      </div>
      <div
        class="option option-4"
        @click="chooseOptionAndRemoveOthersAndRemoveOthers(4)"
      >
        contacto
        <div class="option-fill"><p class="inverted-content">contacto</p></div>
      </div>
    </div>
  </section>
</template>
