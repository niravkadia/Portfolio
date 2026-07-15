const { spawn } = require("child_process");
const path = require("path");

const port = process.env.PORT || 3000;
const host = process.env.HOST || "0.0.0.0";
const nextBin = path.join(__dirname, "node_modules", "next", "dist", "bin", "next");
const isWindows = process.platform === "win32";

const child = spawn(process.execPath, [nextBin, "start", "--hostname", host, "--port", String(port)], {
  cwd: __dirname,
  stdio: "inherit",
  env: { ...process.env, PORT: String(port), HOST: host },
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
  } else {
    process.exit(code || 0);
  }
});
