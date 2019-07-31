`npm start` - it transpiles sources with `babel-plugin-module-resolver` and then executes `my-app.js` in dist/ to prove it works.

> Note: Node 8.5.0+ (with ES modules support to make it simple here) in PATH presumed.

`npm run jscodeshift` starts dry run of jscodeshift replacing import path aliases.

[Related Gist](https://gist.github.com/ford04/fe78dd3bb4eef029a9ac81f2d7f71ef4)