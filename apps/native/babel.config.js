module.exports = function (api) {
  const babelEnv = api.env();
  const plugins = [];

  if (babelEnv !== 'development') {
    plugins.push(['transform-remove-console', { exclude: ['error', 'warn'] }]);
  }

  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins,
  };
};
