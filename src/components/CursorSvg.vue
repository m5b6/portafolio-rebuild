<template>
  <svg class="curzr" hidden>
    <filter id="motionblur" x="-100%" y="-100%" width="400%" height="400%">
      <feGaussianBlur class="curzr-motion-blur" stdDeviation="0, 0" />
    </filter>
    <circle cx="50%" cy="50%" r="5" fill="#FFFFFF" filter="url(#motionblur)" />
  </svg>
</template>
