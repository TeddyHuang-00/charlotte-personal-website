<template>
  <div>
    <Logo />
    <div class="min-h-screen"></div>
    <div class="min-h-screen p-12 flex flex-col md:flex-row justify-around">
      <sidebar
        class="sticky top-6 left-1/3 md:left-0 md:top-1/2 md:-translate-y-1/2 z-50"
        :bio.sync="bio"
        :research.sync="research"
        :contact.sync="contact"
      />
      <div
        class="sticky top-0 left-0 w-full h-56 md:w-0 md:h-0 bg-zinc-900 z-30"
      ></div>
      <span class="w-full md:w-1/2">
        <div id="bio" class="wrapper">
          <p ref="b">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Aspernatur, earum voluptatibus fugit deserunt modi omnis quibusdam!
            Error dolores libero totam tempora possimus illo laboriosam commodi,
            iusto eum. Tempora, enim adipisci.
          </p>
        </div>
        <div id="research" class="wrapper">
          <p ref="r">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
            quo quia architecto sint ipsum impedit beatae! Nam, repellat! Qui
            aliquid itaque ab pariatur maiores saepe, animi consequatur vel
            corrupti facilis?
          </p>
        </div>
        <div id="contact" class="wrapper">
          <p ref="c">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam magni
            debitis, ipsum illum dicta, ratione est vel voluptatem quibusdam
            repudiandae eius veniam nihil earum quidem provident praesentium.
            Voluptas, ipsa dolores?
          </p>
        </div>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

const b = ref(null as HTMLElement | null);
const r = ref(null as HTMLElement | null);
const c = ref(null as HTMLElement | null);

const bio = useElementVisibility(b);
const research = useElementVisibility(r);
const contact = useElementVisibility(c);

watchDebounced(
  bio,
  (v) => {
    if (v) {
      router.push({ hash: "#bio" });
    }
  },
  { debounce: 500, maxWait: 1000 }
);
watchDebounced(
  research,
  (v) => {
    if (v) {
      router.push({ hash: "#research" });
    }
  },
  { debounce: 500, maxWait: 1000 }
);
watchDebounced(
  contact,
  (v) => {
    if (v) {
      router.push({ hash: "#contact" });
    }
  },
  { debounce: 500, maxWait: 1000 }
);
</script>

<style>
.wrapper {
  @apply flex justify-center items-center min-h-screen;
}
</style>
