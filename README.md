### Getting started

`npm install`

### Solution with babel-plugin-module-resolver

`npm run babelresolve` transpiles the src folder with `babel-plugin-module-resolver` and then executes the transpilation in dist folder to prove it works.

> Note: Node 8.5.0+ (with ES modules support to make it simple here) in PATH presumed.


### Solution with jscodeshift

`npm run jscodeshift` starts a dry run of jscodeshift replacing import path aliases in src. Adjust the replace log message [here](https://github.com/ford04/SO-57188027/blob/master/scripts/replace-path-alias.js#L35), if you want. In this sample, jscodeshift runs in dry mode, so it does not alter files. You can change that by removing the `-d` flag:
```
 "scripts": {
    "jscodeshift": "jscodeshift -t scripts/jscodeshift.js src -p"
  },
```

> Caution: Without `-d` flag, files in src are mutated in place.

### Solution with RegEx only

[Related Gist](https://gist.github.com/ford04/fe78dd3bb4eef029a9ac81f2d7f71ef4)
