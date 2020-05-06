const markdown = require('../src')(`
#### Testing Bruh
I kinda fell in love with Markdown.

[let's link](github.com/arakilian0)
`, {
    marked: {
        test: true
    },
    sanitizeHtml: {
        test: true
    }
}, true)

console.log(markdown)