<script setup>
import RightArrow from "@/assets/svgs/rightArrow.vue";
import ChooseOptionAndRemoveOthers from "@/animations/ChooseOptionAndRemoveOthers";
import ContentContainer from "@/components/ContentContainer.vue"; 
import AddScroll from "@/animations/AddScroll";
</script>

<template>
  <section class="main-section">
    <div class="container h-100 d-flex flex-row options-container">
      <div class="col-2 pe-5 d-flex flex-column align-items-end options-list">
        <div class="option option-1" @click="ChooseOptionAndRemoveOthers(1)">
          inicio
        </div>
        <div class="option option-2" @click="AddScroll()">
          experiencia
        </div>
        <div class="option option-3" @click="ChooseOptionAndRemoveOthers(3)">
          sobre mí
        </div>
        <div class="option option-4" @click="ChooseOptionAndRemoveOthers(4)">
          contacto
        </div>
      </div>
      <div class="vertical-divider"></div>
      <ContentContainer/>
    </div>

    <RightArrow class="left-arrow" />
  </section>
</template>
