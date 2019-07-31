module.exports = function transform(file, api) {
  const j = api.jscodeshift;
  return j(file.source)
    .find(j.ImportDeclaration)
    .forEach(path => {
      path.value.source.value = replaceImportPathAlias(
        path.value.source.value,
        pathMapping
      );
    })
    .toSource();
};

// corresponds to tsconfig.json paths or webpack aliases
// e.g. "@/app/store/AppStoreImpl" -> "./custom/app/path/app/store/AppStoreImpl"
const pathMapping = {
  "@": "./custom/app/path",
  fodddo: "bar"
};

function replaceImportPathAlias(importDeclarationSource, pathMap) {
  const regex = createRegex(pathMap);
  return importDeclarationSource.replace(regex, replacer);

  function replacer(match, g1, g2) {
    return pathMap[g1] + g2;
  }
}

function createRegex(pathMap) {
  const mapKeysStr = Object.keys(pathMap).reduce((acc, cur) => `${acc}|${cur}`);
  const regexStr = `^(${mapKeysStr})(.*)$`;
  return new RegExp(regexStr, "g");
}
