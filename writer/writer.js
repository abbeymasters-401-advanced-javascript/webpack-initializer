const fs = require('fs');

function write(str, path) {
  fs.writeFileSync(path, str);
  let name = path.lastIndexOf('/');
  let fullPath = path.slice(name + 1);
  console.log(fullPath + ' created!');
}

function writeJson(obj, path) {
  fs.writeFileSync(path, JSON.stringify(obj));
  let name = path.lastIndexOf('/');
  let fullPath = path.slice(name + 1);
  console.log(fullPath + ' created!');
}

module.exports = {
  write,
  writeJson
};

