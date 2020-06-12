const setup = {
    "presets": [[
        "next/babel",
        {
          "preset-env": {
              "modules": 'false'
          },
          "transform-runtime": {},
          "styled-jsx": {},
          "class-properties": {}
        }
      ]
    ],
    "plugins": [
            [
              'babel-plugin-import',
              {
                'libraryName': '@material-ui/core',
                // Use "'libraryDirectory': ''," if your bundler does not support ES modules
                'libraryDirectory': 'esm',
                'camel2DashComponentName': false
              },
              'core'
            ],
            [
              'babel-plugin-import',
              {
                'libraryName': '@material-ui/icons',
                // Use "'libraryDirectory': ''," if your bundler does not support ES modules
                'libraryDirectory': 'esm',
                'camel2DashComponentName': false
              },
              'icons'
            ]
        ]
  }

  module.exports = {setup}


// const plugins = [
//     [
//       'babel-plugin-import',
//       {
//         'libraryName': '@material-ui/core',
//         // Use "'libraryDirectory': ''," if your bundler does not support ES modules
//         'libraryDirectory': 'esm',
//         'camel2DashComponentName': false
//       },
//       'core'
//     ],
//     [
//       'babel-plugin-import',
//       {
//         'libraryName': '@material-ui/icons',
//         // Use "'libraryDirectory': ''," if your bundler does not support ES modules
//         'libraryDirectory': 'esm',
//         'camel2DashComponentName': false
//       },
//       'icons'
//     ]
//   ];
  
//   module.exports = {plugins};