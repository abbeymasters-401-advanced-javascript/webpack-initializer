const { writeJson } = require('../writer/writer');

function babelWriter(path) {

  const babelInfo = {
    'presets': [
      '@babel/preset-env',
      '@babel/preset-react'
    ],
    'plugins': [
      '@babel/plugin-proposal-class-properties'
    ]
  };
  writeJson(babelInfo, `${path}/.babelrc`);
}

module.exports = babelWriter;
