const fs = require('fs');
const arg = process.argv;

const folderName = arg[arg.length - 1];
if(folderName !== '.') fs.mkdirSync(folderName);
fs.mkdirSync(`${folderName}/src`);

const babelWriter = require('../writer/babel-writer');
const eslintWriter = require('../writer/eslint-writer');
const gitignoreWriter = require('../writer/gitignore-writer');
const packagejsonWriter = require('../writer/package-json-writer');
const srcIndexWriter = require('../writer/src-index-writer');
const travisWriter = require('../writer/travis-writer');
const webpackWriter = require('../writer/webpack-writer');
const devInstaller = require('../dependencies/dev-dependencies-installer');
const dependenciesInstaller = require('../dependencies/dependencies-installer');

eslintWriter(folderName);
gitignoreWriter(folderName);
packagejsonWriter(folderName);
srcIndexWriter(folderName);
travisWriter(folderName);
webpackWriter(folderName);
babelWriter(folderName);
devInstaller(folderName);
dependenciesInstaller(folderName);
