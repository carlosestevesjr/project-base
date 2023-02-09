
module.exports = (api) => {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          root: '.',
          extensions: ['.js', '.jsx', '.png', '.svg', '.json', '.html', '.pdf'],
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};