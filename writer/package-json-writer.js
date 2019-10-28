const writeJson = require('../writer/writer');

function packageJsonWriter(path) {
  writeJson({}, path)
}


module.exports = {
  packageJsonWriter
};