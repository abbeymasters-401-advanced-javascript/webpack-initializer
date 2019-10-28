const { write } = require('../writer/writer');

function gitignoreWriter(path) {

  const gitInfo = `node_modules
  env`;

  write(gitInfo, `${path}/.gitignore`);
}

module.exports = {
  gitignoreWriter
};