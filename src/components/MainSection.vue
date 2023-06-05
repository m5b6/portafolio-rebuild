<script setup>
import RightArrow from "@/assets/svgs/rightArrow.vue";
import ContentContainer from "@/components/ContentContainer.vue";
import LocomotiveSetup from "@/animations/LocomotiveSetup";
import { onMounted } from "vue";
import SideBar from "./SideBar.vue";
import MainSectionInteractions from "@/animations/MainSectionInteractions";
onMounted(() => {
  LocomotiveSetup();
  MainSectionInteractions();
});
</script>

<template>
  <!-- fake columns / overlay -->
  <div
    class="col-2 position-absolute pe-5 d-flex flex-column align-items-end options-list"
  >
    <SideBar data-scroll data-scroll-sticky data-scroll-target="#loco" />
  </div>
  <div class="col-12 h-100 position-absolute px-3">
    <div class="col-10 h-100 float-end">
    </div>
  </div>
  <!-- fake columns / overlay -->

  <!-- real sh** -->
  <section class="main-section">
    <div class="container-fluid h-25 d-flex flex-row options-container">
      <div
        class="col-2 pe-5 d-flex flex-column align-items-end options-list"
      ></div>
      <ContentContainer />
    </div>

    <RightArrow class="left-arrow" />
  </section>
  <!-- real sh** -->
</template>
