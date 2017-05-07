var _ = require('lodash');

module.exports = function (context, opts) {
  opts = opts || {};

  var commonOpts = _.pick(opts, [
    'keepOriginal',
    'globals'
  ]);

  var transformDwayneHtmlOpts = _.assign({}, commonOpts, _.pick(opts, [
    'taggedHtmlFuncName',
    'taggedHtmlScopelessFuncName',
    'replaceUnicode'
  ]));
  var transformDwayneJsOpts = _.assign({}, commonOpts, _.pick(opts, [
    'taggedJsFuncName'
  ]));

  return {
    plugins: [
      [
        require('babel-plugin-transform-dwayne-html'),
        transformDwayneHtmlOpts
      ],
      [
        require('babel-plugin-transform-dwayne-js'),
        transformDwayneJsOpts
      ]
    ]
  };
};
