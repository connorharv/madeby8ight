module.exports = function (api) {
  const defaultConfigFunc = require('shakapacker/package/babel/preset.js');
  const resultConfig = defaultConfigFunc(api);
  const isProductionEnv = api.env('production');

  const changesOnDefault = {
    presets: [
      [
        '@babel/preset-react',
        {
          development: !isProductionEnv,
          useBuiltIns: true,
        },
      ],
    ],
    plugins: [
      process.env.WEBPACK_SERVE && 'react-refresh/babel',
      isProductionEnv && [
        'babel-plugin-transform-react-remove-prop-types',
        {
          removeImport: true,
        },
      ],
    ].filter(Boolean),
  };

  // Avoid duplicates by checking if presets/plugins already exist
  const uniquePresets = changesOnDefault.presets.filter(
    (preset) =>
      !resultConfig.presets.some(
        (existingPreset) =>
          Array.isArray(existingPreset) &&
          existingPreset[0] === preset[0] // Compare preset names
      )
  );

  const uniquePlugins = changesOnDefault.plugins.filter(
    (plugin) =>
      !resultConfig.plugins.some(
        (existingPlugin) =>
          (Array.isArray(existingPlugin) && existingPlugin[0] === plugin[0]) ||
          existingPlugin === plugin // Compare plugin names
      )
  );

  // Ensure shakapacker preset is not duplicated
  resultConfig.presets = [...new Set(resultConfig.presets)];
  resultConfig.plugins = [...new Set(resultConfig.plugins)];

  // Add unique presets and plugins
  resultConfig.presets = [...resultConfig.presets, ...uniquePresets];
  resultConfig.plugins = [...resultConfig.plugins, ...uniquePlugins];

  return resultConfig;
};