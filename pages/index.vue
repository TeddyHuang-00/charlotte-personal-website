<template>
  <div>
    <Logo />
    <div class="min-h-screen relative">
      <span class="absolute bottom-0 h-1/6 w-full" ref="bottom"> </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const bottom = ref(null as HTMLElement | null);
watchOnce(useDebounce(useElementVisibility(bottom)), (v) =>
  v ? router.push({ path: "/info" }) : null
);
</script>

<style></style>
