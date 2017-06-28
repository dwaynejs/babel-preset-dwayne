const _ = require('lodash');

module.exports = (context, options) => {
  options = _.assign({}, options);

  options.transformEmbeddedHtml = !!_.get(options, 'transformEmbeddedHtml', true);
  options.transformEmbeddedHtmlScopeless = !!_.get(options, 'transformEmbeddedHtmlScopeless', true);
  options.transformEmbeddedJs = !!_.get(options, 'transformEmbeddedJs', true);
  options.transformJsx = !!_.get(options, 'transformJsx', false);
  options.taggedHtmlFuncName = _.get(options, 'taggedHtmlFuncName', 'html');
  options.taggedHtmlScopelessFuncName = _.get(options, 'taggedHtmlScopelessFuncName', 'htmlScopeless');
  options.taggedJsFuncName = _.get(options, 'taggedJsFuncName', 'js');
  options.useES6 = !!_.get(options, 'useES6', true);

  const commonOpts = _.omit(options, [
    'transformEmbeddedHtml',
    'transformEmbeddedHtmlScopeless',
    'transformEmbeddedJs',
    'transformJsx',
    'taggedHtmlFuncName',
    'taggedHtmlScopelessFuncName',
    'taggedJsFuncName'
  ]);
  const plugins = [];

  if (options.transformEmbeddedJs) {
    plugins.push([
      require('babel-plugin-transform-dwayne-js'),
      _.assign({
        taggedJsFuncName: options.taggedJsFuncName
      }, commonOpts)
    ]);
  }

  if (options.transformEmbeddedHtml || options.transformEmbeddedHtmlScopeless) {
    plugins.push([
      require('babel-plugin-transform-dwayne-html'),
      _.assign({
        taggedHtmlFuncName: options.transformEmbeddedHtml && options.taggedHtmlFuncName,
        taggedHtmlScopelessFuncName: options.transformEmbeddedHtmlScopeless && options.taggedHtmlScopelessFuncName
      }, commonOpts)
    ]);
  }

  if (options.transformJsx) {
    plugins.push([
      require('babel-plugin-transform-dwayne-jsx'),
      commonOpts
    ]);
  }

  return { plugins };
};
