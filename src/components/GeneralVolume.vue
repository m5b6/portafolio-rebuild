<template>
  <div
    class="content-row d-flex"
    :class="{ 'justify-content-end': Inverted }"
    :id="Id"
    data-scroll
  >
    <!--     <div class="second-volume" ref="threeContainer"></div>
     -->
    <div
      class="col-6 d-flex flex-wrap align-content-end"
      :class="{ 'justify-content-end': Inverted }"


    >
      <p
        class="exp-text bold hover-underline-animation"
        data-scroll
        :data-scroll-call="Id"
        :class="{
          'text-end inverted-animation': Inverted,
          'text-start': !Inverted,
        }"
      >
        {{ Role }}
      </p>
      <p
        class="exp-text"
        :class="{
          'text-end': Inverted,
          'text-start': !Inverted,
        }"
      >
        {{ Description }}
      </p>
      <p
        class="exp-text"
        :class="{
          'text-end': Inverted,
          'text-start': !Inverted,
        }"
      >
        {{ From }} - {{ To }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { defineProps } from "vue";
const props = defineProps({
  Role: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  From: {
    type: String,
    required: true,
  },
  To: {
    type: String,
    required: true,
  },
  HeaderMethod: {
    type: Function,
    required: false,
    default: () => {},
  },
  Inverted: {
    type: Boolean,
    required: false,
    default: false,
  },
  Id: {
    type: String,
    required: false,
  },
});

onMounted(async () => {
  setTimeout(() => {
    props.HeaderMethod;
  }, 1);
});
</script>
