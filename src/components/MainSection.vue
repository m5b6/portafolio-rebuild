<script setup>
import RightArrow from "@/assets/svgs/rightArrow.vue";
import ChooseOptionAndRemoveOthers from "@/animations/ChooseOptionAndRemoveOthers";
</script>

<template>
  <section class="main-section">
    <div
      class="container h-100 d-flex flex-row skew-container-2 justify-content-between options-container"
    >
      <div class="col-4 px-4">
        <div
          class="option option-1 skew-2"
          @click="ChooseOptionAndRemoveOthers(1)"
        >
          inicio
          <div class="option-fill"><p class="inverted-content">inicio</p></div>
        </div>
        <div class="option option-2" @click="ChooseOptionAndRemoveOthers(2)">
          experiencia
          <div class="option-fill">
            <p class="inverted-content">experiencia</p>
          </div>
        </div>
        <div class="option option-3" @click="ChooseOptionAndRemoveOthers(3)">
          sobre mí
          <div class="option-fill">
            <p class="inverted-content">sobre mí</p>
          </div>
        </div>
        <div class="option option-4" @click="ChooseOptionAndRemoveOthers(4)">
          contacto
          <div class="option-fill">
            <p class="inverted-content">contacto</p>
          </div>
        </div>

          <!-- ABOUT ME -->
        <img class = "aboutme aboutme-img" src="@/assets/pfp2.jpeg"/>
          <!-- ABOUT ME -->

      </div>
      <div class="col-8 px-4 d-flex ">
        
          <!-- ABOUT ME -->
        <p class = "aboutme p-2 aboutme-text">
          Como estudiante y desarrollador, me encuentro en una constante
          búsqueda de nuevos desafíos y oportunidades para progresar mis
          habilidades y conocimientos. Siempre busco empujar mis limites.
          <br/><br/> Me veo
          a mí mismo como una persona con iniciativa que disfruta de colaborar
          con personas apasionadas por lo que hagan. Actualmente estoy
          estudiando Ingeniería de Software en la Pontificia Universidad
          Católica de Chile. Si tienes alguna pregunta o quieres contactarme,
          ¡No dudes en contactarme!
        </p>
          <!-- ABOUT ME -->


      </div>
    </div>

    <RightArrow class="left-arrow" />
  </section>
</template>
