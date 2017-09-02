const fs = require("fs")
const path = require("path")
const {camelCase} = require("lodash");
const {name, dependencies} = require("../package.json");


const base = path.resolve(__dirname, "..")
const dist = path.resolve(base, "dist")
const lib = path.resolve(base, ".")


if (!fs.existsSync(dist)) {
  fs.mkdirSync(dist)
}

export default {
  input: path.resolve(lib, "index.js"),
  name,
  external: Object.keys(dependencies),
  output: [
    {
      format: "cjs",
      name: camelCase(name),
      file: path.resolve(dist, name + ".common.js"),
      sourcemap: true
    },
    {
      format: "es",
      file: path.resolve(dist, name + ".esm.js"),
      sourcemap: true
    },
    {
      format: "umd",
      modulename: camelCase(name),
      file: path.resolve(dist, name + ".js"),
      sourcemap: true
    }
  ]

};
