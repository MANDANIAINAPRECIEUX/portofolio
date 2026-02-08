import { defineConfig } from "vite";

import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    host: "0.0.0.0", // Écoute sur toutes les interfaces
    port: 5173,
  },
});
