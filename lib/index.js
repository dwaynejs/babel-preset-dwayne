var _ = require('lodash');

module.exports = function (context, opts) {
  opts = opts || {};

  var keepOriginal = _.get(opts, 'keepOriginal', true);
  var requireOpt = _.get(opts, 'require', true);

  var transformDwayneHtmlOpts = {
    keepOriginal: keepOriginal,
    require: requireOpt,
    taggedHtmlFuncName: _.get(opts, 'taggedHtmlFuncName', 'html')
  };
  var transformDwayneJsOpts = {
    keepOriginal: keepOriginal,
    require: requireOpt,
    taggedHtmlFuncName: _.get(opts, 'taggedJsFuncName', 'js')
  };

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
