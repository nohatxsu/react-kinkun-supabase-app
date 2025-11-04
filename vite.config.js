import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { createClient } from "@supabase/supabase-js";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});

const supabase = createClient(
  "https://dfbrhseptcrxxnxhuukz.supabase.co",
  "public-anon-key"
);
