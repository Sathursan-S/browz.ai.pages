import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    site: "https://sathursan-s.github.io/browz.ai.pages",
    base: "/browz.ai.pages/",
    integrations: [react(), tailwind()],
});
