import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;

    if (to.hash && to.path == from.path) {
      const el = document.querySelector(to.hash);
      const rect = el?.getBoundingClientRect();
      return {
        top: rect ? window.scrollY + rect.top : 0,
        left: 0,
        behavior: "smooth",
      };
    }

    return {
      top: 0,
      left: 0,
    };
  },
};
