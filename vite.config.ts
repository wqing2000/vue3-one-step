/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { vitestConfig } from "./vitestConfig";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  test: {
    ...vitestConfig,
  },
  plugins: [vue(), vueJsx()],
});
