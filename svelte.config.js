import preprocess from "svelte-preprocess";
//import adapter from "@sveltejs/adapter-auto";
import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // adapter: adapter(),
    adapter: adapter({
      // default options are shown
      pages: "build",
      assets: "build",
      fallback: null,
      precompress: false,
    }),

    // Override http methods in the Todo forms
    methodOverride: {
      allowed: ["PATCH", "DELETE"],
    },
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
