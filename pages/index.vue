<template>
  <div
    class="hero min-h-screen"
    style="background-image: url(https://gif.plaza.one/69.gif)"
  >
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">WELCOME</h1>
        <h3 class="mb-5 font-bold">Student Manegement System</h3>
        
        <NuxtLink to="/students" class="btn btn-primary">See Student Data</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Student Mangement System",
});
</script>
