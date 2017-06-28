# babel-preset-dwayne

This preset transforms Dwayne tagged templates, js tagged expressions
and JSX into Dwayne-compatible javascript.

This preset includes the following plugins:

* [transform-dwayne-html](https://github.com/dwaynejs/babel-plugin-transform-dwayne-html)
* [transform-dwayne-js](https://github.com/dwaynejs/babel-plugin-transform-dwayne-js)
* [transform-dwayne-jsx](https://github.com/dwaynejs/babel-plugin-transform-dwayne-jsx)

The preset has following options:

* `options.transformEmbeddedHtml` (default: `true`): passed to
[transform-dwayne-html](https://github.com/dwaynejs/babel-plugin-transform-dwayne-html).
* `options.transformEmbeddedHtmlScopeless` (default: `true`): passed to
[transform-dwayne-html](https://github.com/dwaynejs/babel-plugin-transform-dwayne-html).
* `options.transformEmbeddedJs` (default: `true`): whether to use
[transform-dwayne-js](https://github.com/dwaynejs/babel-plugin-transform-dwayne-js)
or not.
* `options.transformJsx` (default: `false`): whether to use
[transform-dwayne-jsx](https://github.com/dwaynejs/babel-plugin-transform-dwayne-jsx)
or not.
* `options.taggedHtmlFuncName` (default: `html`): passed to
[transform-dwayne-html](https://github.com/dwaynejs/babel-plugin-transform-dwayne-html).
* `options.taggedHtmlScopelessFuncName` (default: `htmlScopeless`): passed to
[transform-dwayne-html](https://github.com/dwaynejs/babel-plugin-transform-dwayne-html).
* `options.taggedJsFuncName` (default: `js`): passed to
[transform-dwayne-js](https://github.com/dwaynejs/babel-plugin-transform-dwayne-js)

The rest options are passed to all plugins which then passed to
corresponding transformers (see each plugin).
