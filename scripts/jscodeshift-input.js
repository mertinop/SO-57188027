/**
 * Corresponds to tsconfig.json paths or webpack aliases
 * E.g. "@/app/store/AppStoreImpl" -> "./custom/app/path/app/store/AppStoreImpl"
 */
const pathMapping = {
  "@": "./src",
  foo: "bar"
};

module.exports = pathMapping;
