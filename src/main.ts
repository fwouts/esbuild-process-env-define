// Important: process.env.FOO is a TypeScript error when setting
// noPropertyAccessFromIndexSignature: true in tsconfig.json.
console.log(process.env["FOO"]);
