# PostCSS Plugin Pxzoom [![Build Status][ci-img]][ci]

[PostCSS] plugin 对属性的尺寸放大或缩小.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/JianWeiZh/postcss-plugin-pxzoom.svg
[ci]:      https://travis-ci.org/JianWeiZh/postcss-plugin-pxzoom

```css
.foo {
    /* Input example */
}
```

```css
.foo {
  /* Output example */
}
```

## Usage

```js
postcss([ require('postcss-size-zoom') ])
```

## Postcss.config.js

```js
'postcss-size-zoom': {
  'zoom': 2, // 放大缩小的比例， 默认值 1
  'unitKey': 'px', // 需要修改尺寸的单位， 默认值'px'
  'changeName': 'cube-ui' // 需要修改的包名，默认值'', 为空时所有匹配到的值都会更改
}
```

See [PostCSS] docs for examples for your environment.
