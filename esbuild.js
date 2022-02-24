const { build } = require("esbuild");

build({
  entryPoints: ["./src/main.ts"],
  minify: false,
  bundle: true,
  outfile: "./dist/main.js",
  external: ["vscode"],
  platform: "node",
  define: {
    "process.env.FOO": JSON.stringify("Hello, World!"),
  },
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
