# Pagination
## Install
#### ECMAScript (Node.js v12.x LTS or higher)
`npm i --save @darkwolf/pagination.mjs`
#### CommonJS (Node.js v10.x LTS or higher)
`npm i --save @darkwolf/pagination.cjs`
## Using
```javascript
// ECMAScript
import Pagination from '@darkwolf/pagination.mjs'

// CommonJS
const Pagination = require('@darkwolf/pagination.cjs')

Pagination.navigator({
  hasFirstPage: true,
  hasPreviousPage: true,
  hasNextPage: true,
  hasLastPage: true
}).map(button => button.text) // => ['«', '‹', '•', '›', '»']
const pagination = new Pagination({
  pageCount: 100,
  pageNumber: 20
})
pagination.paginator().map(button => button.text) // => ['«', '1…', '18', '19', '• 20 •', '21', '22', '23', '…100', '»']
pagination.paginator({
  mode: 'navigation',
  pageNumber: 10
}).map(button => button.text) // => ['« 1', '7', '8', '‹ 9', '• 10 •', '11 ›', '12', '13', '14', '100 »']
pagination.stepper().map(button => button.text) // => ['• 1 •', '5', '10', '25']
```
## [API Documentation](https://github.com/Darkwolf/node-pagination/blob/master/docs/API.md)
## Contact Me
#### GitHub: [@PavelWolfDark](https://github.com/PavelWolfDark)
#### Telegram: [@PavelWolfDark](https://t.me/PavelWolfDark)
#### Email: [PavelWolfDark@gmail.com](mailto:PavelWolfDark@gmail.com)
