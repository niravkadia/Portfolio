const { spawn } = require("child_process");

const port = process.env.PORT || 3000;
const start = process.platform === "win32" ? "npm.cmd" : "npm";

const child = spawn(start, ["run", "start:next"], {
  env: { ...process.env, PORT: String(port), HOSTNAME: "0.0.0.0" },
  stdio: "inherit",
  shell: false,
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
  } else {
    process.exit(code || 0);
  }
});
