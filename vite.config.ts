--- a/vite.config.ts
+++ b/vite.config.ts
@@ -1,19 +1,13 @@
 import path from 'path';
-import { defineConfig, loadEnv } from 'vite';
+import { defineConfig } from 'vite';
 import react from '@vitejs/plugin-react';
 
-export default defineConfig(({ mode }) => {
-    const env = loadEnv(mode, '.', '');
-    return {
+export default defineConfig({
       server: {
         port: 3000,
         host: '0.0.0.0',
       },
       plugins: [react()],
-      define: {
-        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
-        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
-      },
       resolve: {
         alias: {
           '@': path.resolve(__dirname, '.'),
         }
       }
-    };
 });
