<template>
  <div
    class="w-1 h-48 bg-white origin-center rotate-12 flex flex-col justify-evenly rounded-full"
  >
    <NuxtLink
      v-for="(act, i) in [bio, research, contact]"
      :to="`#${ids[i].toLowerCase()}`"
      class="h-10 ml-4 origin-left -rotate-12 flex justify-start items-center relative"
      :class="{ 'flex-grow-0': !act, 'flex-grow': act }"
    >
      <span
        class="rounded-full border-2 border-white absolute"
        :class="{
          'w-3 h-3 -left-5 bg-white': !act,
          'w-5 h-5 -left-6 bg-zinc-900': act,
        }"
      ></span>
      <h1 :class="{ 'text-2xl flex-grow-0': !act, 'text-3xl flex-grow': act }">
        {{ ids[i] }}
      </h1>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const ids = ref(["Bio", "Research", "Contact"]);
const { bio, research, contact } = defineProps({
  bio: Boolean,
  research: Boolean,
  contact: Boolean,
});
</script>

<style scoped>
* {
  @apply transition-all duration-150;
}
</style>
