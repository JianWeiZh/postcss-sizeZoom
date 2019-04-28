var postcss = require('postcss')

var plugin = require('./')

function run (input, output, opts) {
  return postcss([plugin(opts)]).process(input).then(function (result) {
	console.log(result)
    expect(result.css).toEqual(output)
    expect(result.warnings()).toHaveLength(0)
  })
}

/* Write tests here
*/

it('does something', function () {
  return run('a{width: 100px;height: 100px;border: 1px solid #fff;background: red;}', 'a{width: 100px;height: 100px;border: 1px solid #fff;background: red;}', { })
})

