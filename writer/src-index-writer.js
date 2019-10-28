const { write } = require('../writer/writer');

function srcIndexWriter(path) {

  const htmlInfo = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Webpack</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
  </html>`;

  const indexInfo = `import React from 'react';
  import { render } from 'react-dom';
  import App from './components/App';
  
  render(
    <App />,
    document.getElementById('root')
  )`;

  write(indexInfo, `${path}/src/index.js`);
  write(htmlInfo, `${path}/src/index.html`);
}

module.exports = srcIndexWriter;
