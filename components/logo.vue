<template>
  <div :style="`height: ${strokeLength + height}px`" class="relative w-full">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="384"
      height="480"
      class="left-1/2 -translate-x-1/2 translate-y-1/2"
      :class="{
        'fixed bottom-1/2': !animationDone,
        'absolute bottom-[50vh]': animationDone,
      }"
    >
      <path
        ref="logo"
        fill="#1a523d"
        :fill-opacity="1 - strokeOpacity"
        stroke="white"
        stroke-linejoin="round"
        stroke-linecap="round"
        :stroke-width="8 * strokeOpacity"
        :stroke-opacity="strokeOpacity"
        :stroke-dasharray="strokeLength"
        :stroke-dashoffset="strokeOffset"
        d="M204.98 254.54c-7.356 54.977-7.81 109.91-6.994 164.48-29.417-49.239-44.442-104.12-40.782-162.16l-8.913.408c-1.711.078-3-.986-3.219-2.463l-17.16.847c-1.748.086-2.975-1.268-2.64-2.917l14.301-42.4c.32-1.561 1.916-2.758 3.544-2.654l9.04.952c.644-1.534 2.304-2.65 4.032-2.569l8.786.407c14.243-58.049 46.199-112.93 90.803-162.16-17.65 54.573-34.137 109.51-43.742 164.48l12.513 5.143 119.77-5.89c1.771-.087 3.409-1.26 3.711-2.954l.005-.03c7.531-43.393 17.077-91.809 26.301-134.82.467-2.18 0-4.115-1.404-5.814a2984.6 2984.6 0 0 1-33.59-41.726c-1.38-1.731-3.34-2.66-5.871-2.785a163277.75 163277.75 0 0 0-206.14-9.905c-2.341-.11-4.582.665-6.724 2.331A3944.6 3944.6 0 0 0 68.72 53.43c-2.123 1.711-3.428 3.752-3.912 6.119a3623 3623 0 0 0-55.262 362.26c-.243 2.41.428 4.466 2.013 6.166a3280.2 3280.2 0 0 0 38.825 40.93c1.427 1.476 5.964 1.03 5.964 1.03h198.79s4.967-1.1 6.68-2.71c15.51-14.7 39.481-38.9 55.161-53.253 1.945-1.77 3.04-7.93 3.286-10.15a3324.7 3324.7 0 0 1 12.928-102.44c2-14.081 4.526-29.453 6.839-43.793.476-2.955-1.853-5.633-4.94-5.685l-116.08-2.01-14.023 4.662"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { useMax, useClamp } from "@vueuse/math";

const logo = ref(null as SVGPathElement | null);
const strokeLength = ref(0);
const { height } = useWindowSize();
const { y } = useWindowScroll();

const speedFactor = 2;
onMounted(() => {
  strokeLength.value = logo.value?.getTotalLength() ?? 0;
});
const strokeOffset = useMax(0, useSub(strokeLength, useMul(y, speedFactor)));
const strokeOpacity = useClamp(
  useSub(1, useDiv(useSub(useMul(y, speedFactor), strokeLength), strokeLength)),
  0,
  1
);
const animationDone = useEq(strokeOpacity, 0);

onMounted(() => {
  strokeLength.value = logo.value?.getTotalLength() ?? 0;
});
</script>
