### Solution with babel-plugin-module-resolver

`npm run babelresolve` - it transpiles sources with `babel-plugin-module-resolver` and then executes `my-app.js` in `dist` to prove it works.

> Note: Node 8.5.0+ (with ES modules support to make it simple here) in PATH presumed.


### Solution with jscodeshift

`npm run jscodeshift` starts a dry run of jscodeshift replacing import path aliases in `src`. Adjust the replace log message [here](https://github.com/ford04/SO-57188027/blob/master/scripts/replace-path-alias.js#L35), if you want. Per default, `jscodeshift` runs in dry mode, so it does not alter files. You can change that by removing the `-d` argument in `package.json` scripts:
```
 "scripts": {
    "jscodeshift": "jscodeshift -t scripts/jscodeshift.js src -p"
  },
```

### Solution with RegEx only

[Related Gist](https://gist.github.com/ford04/fe78dd3bb4eef029a9ac81f2d7f71ef4)
