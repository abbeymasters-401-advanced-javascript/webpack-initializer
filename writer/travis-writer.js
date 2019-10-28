const { write } = require('../writer/writer');

function travisWriter(path) {
  const travisInfo = 
  `language: node_js
  node_js: node`;

  write(travisInfo, `${path}/.travis.yml`);
}

module.exports = travisWriter;