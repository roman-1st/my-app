// module.exports = function(api) {
//   api.cache(true);
//
//   return {
//     presets: [
//       ['module:metro-react-native-babel-preset'],
//       ['babel-preset-expo'],
//     ],
//     plugins: [
//       [
//         'module-resolver',
//         {
//           alias: {
//             // Добавьте alias для папки с компонентами, если требуется
//           },
//         },
//       ],
//       ['@babel/plugin-transform-runtime'],
//       ['@babel/plugin-proposal-decorators', { legacy: true }],
//       ['@babel/plugin-proposal-class-properties', { loose: true }],
//       [
//         'babel-plugin-inline-import',
//         {
//           extensions: ['.scss'], // Добавьте поддержку SCSS
//         },
//       ],
//       [
//         'react-native-platform-specific-extensions',
//         {
//           extensions: ['scss'], // Добавьте расширение SCSS
//         },
//       ],
//     ],
//   };
// };

module.exports = function(api) {
  api.cache(true);

  return {
    presets: [
      ['module:metro-react-native-babel-preset'],
      ['babel-preset-expo'],
    ],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            // Добавьте alias для папки с компонентами, если требуется
          },
        },
      ],
      ['@babel/plugin-transform-runtime'],
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      // [
      //   'babel-plugin-inline-import',
      //   {
      //     extensions: ['.scss'], // Добавьте поддержку SCSS
      //   },
      ["babel-plugin-inline-import"]

    ],
  };
};