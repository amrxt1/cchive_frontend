import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [
      "89cf-2001-569-598f-f200-9c49-455b-813e-8bd1.ngrok-free.app",
    ],
  },
});
