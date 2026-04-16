module.exports = {
  apps: [
    {
      name: "alvecom",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",
      cwd: __dirname,
      instances: 1,
      exec_mode: "fork",
      watch: false,
      autorestart: true,
      max_memory_restart: "800M",
      env: {
        NODE_ENV: "production",
        PORT: "3000",
        HOSTNAME: "127.0.0.1",
      },
    },
  ],
};
