/**
 * Corresponds to tsconfig.json paths or webpack aliases
 * E.g. "@/app/store/AppStore" -> "./src/app/store/AppStore"
 */
const pathMapping = {
  "@": "./src",
  foo: "bar"
};

module.exports = pathMapping;
