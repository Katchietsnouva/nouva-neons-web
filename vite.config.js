// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default ({ mode }) => {
//   return defineConfig({
//     plugins: [react()],
//     build: {
//       outDir: 'build',
//     },
//     resolve: {
//       alias: {
//         // Use an alias for development, but the actual path for production
//         '@images': mode === 'development' ? '/src/assets/images/' : '/assets/',
//       },
//     },
//   });
// };


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
    assetsInclude: /\.(jpg|jpeg|webp|png|gif|avif)$/, // Specify the file extensions to include
  },
});
