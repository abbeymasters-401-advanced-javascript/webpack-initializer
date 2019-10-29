const installer = require('../dependencies/installer');

function dependenciesInstaller(path) {
  const packages = [
    'react',
    'react-dom'
  ];
  installer(path, packages, true);
}

module.exports = dependenciesInstaller;