const installer = require('../dependencies/installer');
const childProcess = require('child_process');
childProcess.execSync = jest.fn();

describe('testing installer function', () => {
  it('installs dependencies', () => {
    installer('./data/example.txt', ['react', 'thing'], true);
    expect(childProcess.execSync.mock.calls[0][0]).toBe('npm i -D react thing');  
  });
  it('installs dependencies', () => {
    installer('./data/example.txt', ['react', 'thing'], false);
    expect(childProcess.execSync.mock.calls[1][0]).toBe('npm i  react thing');  
  });
});
