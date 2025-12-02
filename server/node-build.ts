import path from "path";
import { createServer } from "./index";
import * as express from "express";
import { existsSync } from "fs";

const app = createServer();
const port = process.env.PORT || 3000;

// In production, serve the built SPA files
const __dirname = import.meta.dirname;
const distPath = path.join(__dirname, "../spa");
const updatesCandidates = [
  path.join(__dirname, "../updates"),
  path.join(process.cwd(), "updates/dist"),
];
const updatesPath = updatesCandidates.find((dir) => existsSync(dir));

// Serve static files
app.use(express.static(distPath));
if (updatesPath && existsSync(updatesPath)) {
  app.use("/updates", express.static(updatesPath));
}

// Handle React Router - serve index.html for all non-API routes
app.get("*", (req, res) => {
  // Don't serve index.html for API routes
  if (req.path.startsWith("/api/") || req.path.startsWith("/health")) {
    return res.status(404).json({ error: "API endpoint not found" });
  }

  if (req.path.startsWith("/updates")) {
    if (updatesPath && existsSync(path.join(updatesPath, "index.html"))) {
      return res.sendFile(path.join(updatesPath, "index.html"));
    }

    return res.status(503).json({ error: "Updates site not built" });
  }

  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(port, () => {
  console.log(`🚀 Fusion Starter server running on port ${port}`);
  console.log(`📱 Frontend: http://localhost:${port}`);
  console.log(`🔧 API: http://localhost:${port}/api`);
  console.log(`📰 Updates: http://localhost:${port}/updates/`);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("🛑 Received SIGTERM, shutting down gracefully");
  process.exit(0);
});

process.on("SIGINT", () => {
  console.log("🛑 Received SIGINT, shutting down gracefully");
  process.exit(0);
});
