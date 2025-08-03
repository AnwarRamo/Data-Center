import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Include if using React
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(), // Include if using React
    tailwindcss(),
  ],
});