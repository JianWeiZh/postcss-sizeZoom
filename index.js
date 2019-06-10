var postcss = require('postcss')
module.exports = postcss.plugin('postcss-plugin-pxzoom', function (opts) {
  opts = opts || {
    zoom: 1,
    unitKey: 'px',
    changeName: ''
  }
  function toZoom (root) {
    root.walkDecls(function (decl) {
      const reg = new RegExp('[0-9]+' + opts.unitKey)
      decl.value = decl.value.replace(reg, function (val) {
        val = val.toLowerCase()
        if (val === '1px') return val
        return parseFloat(val) * opts.zoom + opts.unitKey
      })
    })
  }
  return function (root) {
    if (root.source.input.file.indexOf(opts.changeName) !== -1) {
      toZoom(root)
    }
  }
})
