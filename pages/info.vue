<template>
  <div>
    <div
      class="min-h-screen p-12 flex flex-col md:flex-row justify-around scroll-smooth pt-[120vh]"
    >
      <sidebar
        class="sticky top-6 left-1/3 md:left-0 md:top-1/2 md:-translate-y-1/2 z-50"
        :bio.sync="bio"
        :research.sync="research"
        :contact.sync="contact"
      />
      <div
        class="sticky top-0 left-0 w-full h-56 md:w-0 md:h-0 bg-zinc-900 z-30"
      ></div>
      <div class="w-full md:w-1/2" v-show="fullyLoaded">
        <div class="w-full h-screen"></div>
        <section id="bio" class="wrapper">
          <span
            ref="b"
            class="flex flex-col gap-6 justify-evenly h-full mt-48 md:mt-0"
          >
            <p class="text-justify whitespace-break-spaces md:leading-loose">
              Nan Huang is a Ph.D. student in the College of Computing and
              Informatics at the University of North Carolina at Charlotte. Nan
              received his B.E. in Bioinformatics from Peking University in 2023
              summer. His research focuses on Data Analysis and Deep Learning.
            </p>
            <p class="text-justify whitespace-break-spaces md:leading-loose">
              Besides, Nan also owns a passion in software engineering and web
              development. He is a hobbyist-level full-stack developer and has
              developed several web applications for both academic purposes. He
              is also a big fan of open-source software and has contributed to
              several open-source projects.
            </p>
          </span>
        </section>
        <section id="research" class="wrapper">
          <p
            ref="r"
            class="text-justify whitespace-break-spaces mt-48 md:mt-0 md:leading-loose"
          >
            Nan's research interest mainly lies in applying machine learning and
            deep learning techniques to systematically analyze biological data
            and model biological systems. He is now working under the
            supervision of Dr. Xiang Zhang, emphasizing on applying deep
            learning methods to analyze EEG signals to boost healthcare
            development. He is also a member of the Charlotte Machine Learning
            Lab (CharMLab) at UNC Charlotte.
          </p>
        </section>
        <section id="contact" class="wrapper">
          <ul
            ref="c"
            class="flex flex-col justify-evenly h-[50vh] mt-48 md:mt-0"
          >
            <li>
              <img
                src="nan-huang.png"
                alt="Photo of Nan Huang"
                class="w-full max-w-xs drop-shadow-[0_-5px_5px_rgba(255,255,255,0.25)]"
              />
            </li>
            <li>
              <Icon name="ph:buildings-duotone" size="24" /> Office: Woodward
              Hall 437, 28262
            </li>
            <li>
              <a href="mailto:nhuang1@uncc.edu">
                <Icon name="ph:envelope-duotone" size="24" /> E-mail:
                nhuang1@uncc.edu
              </a>
            </li>
            <li>
              <a
                rel="noopener"
                target="_blank"
                href="https://teddyhuang-00.github.io"
              >
                <Icon name="ph:house-line-duotone" size="24" />
                Homepage: teddyhuang-00.github.io
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
    <div class="w-screen h-screen sticky">
      <span class="absolute bottom-0 h-1/6 w-full" ref="bottom"> </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const debounce = 500;
const maxWait = 1000;

const b = ref(null as HTMLElement | null);
const r = ref(null as HTMLElement | null);
const c = ref(null as HTMLElement | null);

const bio = useElementVisibility(b);
const research = useElementVisibility(r);
const contact = useElementVisibility(c);

watchDebounced(bio, (v) => (v ? router.push({ hash: "#bio" }) : null), {
  debounce,
  maxWait,
});
watchDebounced(
  research,
  (v) => (v ? router.push({ hash: "#research" }) : null),
  { debounce, maxWait }
);
watchDebounced(contact, (v) => (v ? router.push({ hash: "#contact" }) : null), {
  debounce,
  maxWait,
});

const fullyLoaded = ref(false);
onMounted(() => {
  fullyLoaded.value = true;
});

const bottom = ref(null as HTMLElement | null);
watchOnce(useDebounce(useElementVisibility(bottom)), (v) =>
  v ? router.push({ path: "/" }) : null
);
</script>

<style scoped>
.wrapper {
  @apply flex justify-center items-center min-h-screen my-4;
}
</style>
