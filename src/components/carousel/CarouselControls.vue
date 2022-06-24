<template>
  <!-- in vue 2.x you need wrap these buttons in a div -->
  <button class="carousel-control left" @click="$emit('prev')">
    <svg xmlns="http://www.w3.org/2000/svg" class="prev-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
    </svg>
  </button>
  <button class="carousel-control right" @click="$emit('next')">
    <svg xmlns="http://www.w3.org/2000/svg" class="next-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
    </svg>
  </button>
</template>

<script>
export default {
  emits: ["prev", "next"], // vue v3
};
</script>

