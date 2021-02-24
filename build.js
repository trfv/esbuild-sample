(async () => {
  const isDev = process.env.NODE_ENV === '"development"';
  require("fs-extra").copySync("public", "build");
  require("esbuild")
    .build({
      entryPoints: ["src/index.tsx"],
      outdir: "build",
      minify: !isDev,
      watch: isDev,
      sourcemap: isDev,
      bundle: true,
      define: { "process.env.NODE_ENV": process.env.NODE_ENV },
      // logLevel: "silent",
    })
    .catch(() => process.exit(1));
  if (isDev) {
    require("live-server").start({
      root: "build",
      open: false,
      host: "localhost",
      port: 3000,
      // logLevel: 0,
    });
  }
})();
