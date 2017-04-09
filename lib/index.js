module.exports = function (context, opts) {
  opts = opts || {};

  var transformDwayneHTMLOpts = {};

  if ('keepOriginal' in opts) {
    transformDwayneHTMLOpts.keepOriginal = opts.keepOriginal;
  }

  if ('require' in opts) {
    transformDwayneHTMLOpts.require = opts.require;
  }

  return {
    plugins: [
      [
        require('babel-plugin-transform-dwayne-html'),
        transformDwayneHTMLOpts
      ]
    ]
  };
};
