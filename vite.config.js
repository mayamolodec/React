import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  appType: "spa",
  plugins: [react()],
  css: {
    modules: {
      generateScopedName: "[name]__[local]__[hash:hex:5]",
    },
  },
  // server: {
  //   proxy: {
  //     "/quizes": {
  //       target: process.env.BACKEND,
  //       changeOrigin: true,
  //       secure: false,
  //     },
  //   },
  // },
});
