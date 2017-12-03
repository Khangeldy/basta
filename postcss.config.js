module.exports = {
  parser: 'sugarss',
  map: { inline: true },
  plugins: [
    require('postcss-cssnext'),
    require('postcss-import')({
      path: ["postcss"],
    })
  ]
}
