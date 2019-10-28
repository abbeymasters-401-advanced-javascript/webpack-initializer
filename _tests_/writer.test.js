const { write, writeJson } = require('../writer/writer');
const fs = require('fs');

jest.mock('fs');

describe('test writer.js functions', () => {

  it('writes a file', () => {
    write('oh hello there', './data/hello.txt');
    expect(fs.writeFileSync).toBeCalled();
    expect(fs.writeFileSync.mock.calls[0][0]).toBe('./data/hello.txt');
    expect(fs.writeFileSync.mock.calls[0][1]).toBe('oh hello there');
  });

  it('calling writeJson function', () => {
    writeJson({ abbey: 2 }, './data/new.txt');
    expect(fs.writeFileSync).toBeCalled();
    expect(fs.writeFileSync.mock.calls[1][0]).toEqual('./data/new.txt');
    expect(fs.writeFileSync.mock.calls[1][1]).toEqual(JSON.stringify({ abbey: 2 }, null, 2));
  });

});