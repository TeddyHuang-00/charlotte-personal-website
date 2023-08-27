<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
html {
  @apply bg-zinc-900 text-white no-scrollbar;
}
.page-enter-active,
.page-leave-active {
  @apply transition-all duration-0;
}
.page-leave-to,
.page-enter-from {
  @apply opacity-0;
}
</style>
