# @toolio/markdown

**A wrapper for [Marked.js](https://github.com/markedjs/marked) and [sanitize-html](https://github.com/apostrophecms/sanitize-html).**

[![CircleCI](https://circleci.com/gh/tooliojs/markdown.svg?style=shield)](https://circleci.com/gh/tooliojs/markdown)
[![npm (scoped)](https://img.shields.io/npm/v/@toolio/markdown)](https://www.npmjs.com/package/@toolio/markdown)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/tooliojs/markdown/blob/master/LICENSE.md)
[![Chat](https://img.shields.io/badge/chat-on%20discord-blue.svg)](https://discord.gg/UuNhTFN)

## Install
```
npm install @toolio/markdown
```

## Usage

```js
const markdownToHtml = require('@toolio/markdown')

let markdown = `# Hello World
Here is a paragraph with a [link](https://tooliojs.com)
`

// Sanitized
let html = markdownToHtml(markdown, {
    marked: {},
    sanitizeHtml: {}
})

// Not Sanitized
let html = markdownToHtml(markdown, { 
    marked: {}
}, false)
```

1. The first argument that `markdownToHtml()` requires is a string.
The string should be the markdown you want to compile to HTML.
If this argument is not provided, the program will return undefined.

2. The second argument that `markdownToHtml()` requires is an
object. Currently, it only recognizes 2 keys. 

    1. `marked`
        - Set your [Marked.js Options](https://marked.js.org/#/USING_ADVANCED.md#options) in this object
    2. `sanitizeHtml`
        - Set your [sanitize-html Options](https://github.com/apostrophecms/sanitize-html#what-are-the-default-options) in this object

3. The last argument for `markdownToHtml()` is optional. It should be a boolean.
If `false`, it will remove the use of `sanitize-html` completely.


## License

MIT License

Copyright (c) 2020 Toolio.js

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.