import express from "express";
import cors from "cors";
import path from "path";
import { existsSync } from "fs";
import { handleDemo } from "./routes/demo";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  const updatesCandidates = [
    path.resolve(process.cwd(), "dist/updates"),
    path.resolve(process.cwd(), "updates/dist"),
  ];

  const updatesDir = updatesCandidates.find((dir) => existsSync(dir));

  if (updatesDir) {
    app.use(
      "/updates",
      express.static(updatesDir, {
        index: "index.html",
        redirect: false,
      }),
    );
    app.get("/updates*", (_req, res, next) => {
      const indexFile = path.join(updatesDir, "index.html");
      if (existsSync(indexFile)) {
        return res.sendFile(indexFile);
      }
      return next();
    });
  } else {
    app.get("/updates*", (_req, res) => {
      res
        .status(503)
        .send(
          "Updates site not built yet. Run `npm run build:astro` (or `npm run build`) and restart the dev server.",
        );
    });
  }

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    res.json({ message: "Hello from Express server v2!" });
  });

  app.get("/api/demo", handleDemo);

  return app;
}
