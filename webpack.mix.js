let mix = require('laravel-mix')

mix
  .setPublicPath('dist')
  .js('resources/js/custom.js', 'js')
  .sass('resources/sass/custom.scss', 'css')
