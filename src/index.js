const marked = require('marked')
const _sanitize = function(input, options=null) { return input }
let sanitize = require('sanitize-html')

module.exports = function(input, options, __sanitize=true) {
    if(__sanitize === false) sanitize = _sanitize
    if(!input) return undefined
    if(!options) return sanitize(marked(input))
    else {
        if(!options.marked || !options.sanitizeHtml) return sanitize(marked(input))
        else {
            if(options.marked && options.sanitizeHtml)        { marked.setOptions(options.marked); return sanitize(marked(input), options.sanitizeHtml) }
            else if(options.marked && !options.sanitizeHtml)  { marked.setOptions(options.marked); return sanitize(marked(input)) }
            else if(!options.marked && options.sanitizeHtml)  { return sanitize(marked(input), options.sanitizeHtml) }
        }
    }
}