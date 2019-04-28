var postcss = require('postcss')
module.exports = postcss.plugin('postcss-plugin-pxzoom', function (opts) {
	opts = opts || {
		zoom: 1,
		unitKey: 'px',
		changeName: 'cube-ui'
	}
	return function(root, result) {
		if (root.source.input.file.indexOf(opts.changeName) !== -1) {
      console.log(root.source.input.file)
			root.walkDecls(function(decl, i) {
			  const reg = new RegExp('[0-9]+' + opts.unitKey)
			  decl.value = decl.value.replace(reg, function (val) {
          val = val.toLowerCase()
          if (val === '1px') return val
          return parseFloat(val) * 2 + 'px'
        })
				// var reg = new RegExp('^[0-9]+' + opts.unitKey), value = ''
				// if (reg.test(decl.value)) {
				// 	value = returnValueStr(decl.value, opts)
				// 	decl.value = value
				// }
			})
		}
	};
});
function returnValueStr(val, opts) {
	var arr = val.split(opts.unitKey)
	return arr.length === 1 ? arr[0] * opts.zoom + opts.unitKey : arr[0] * opts.zoom + opts.unitKey + arr[1]
}
