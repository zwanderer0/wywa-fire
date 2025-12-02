import { defineConfig, Plugin, HtmlTagDescriptor } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createServer } from "./server";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: "dist/spa",
  },
  plugins: [react(), expressPlugin(), netlifyIdentityPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
}));

function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve", // Only apply during development (serve mode)
    configureServer(server) {
      const app = createServer();

      // Add Express app as middleware to Vite dev server
      server.middlewares.use(app);
    },
  };
}

function netlifyIdentityPlugin(): Plugin {
  return {
    name: "netlify-identity-plugin",
    transformIndexHtml(html) {
      return {
        html,
        tags: [
          {
            tag: "script",
            attrs: { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
            injectTo: "head",
          },
          {
            tag: "script",
            children: `
              if (window.netlifyIdentity) {
                window.netlifyIdentity.on("init", user => {
                  if (!user) {
                    window.netlifyIdentity.on("login", () => {
                      // Redirect to admin after login
                      document.location.href = "/updates/admin/";
                    });
                  }
                });

                // Handle invite tokens
                if (window.location.hash.includes('invite_token') ||
                    window.location.hash.includes('recovery_token')) {
                  // Show the modal for password reset
                  window.netlifyIdentity.open();
                }
              }
            `,
            injectTo: "body-prepend",
          },
        ],
      };
    },
  };
}
