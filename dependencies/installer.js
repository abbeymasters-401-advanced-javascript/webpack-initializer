function installer(path, packages, dev) {
  console.log('installer beginning');
  const { execSync } = require('child_process');
  let dep;
  if(dev) dep = '-D';
  if(!dev) dep = '';
  execSync(`npm i ${dep} ${packages.join(' ')}`, {
    cwd: path,
    stdio: 'inherit'
  });
  console.log('installer finished');
}

module.exports = installer;