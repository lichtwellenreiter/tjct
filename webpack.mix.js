let mix = require('laravel-mix');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


mix.webpackConfig({
    plugins:[
        new CleanWebpackPlugin({
            verbose: true
        }),
    ],
});

mix.js('src/js/app.js', 'public/js/')
    .js('src/js/jquery.min.js', 'public/js/')
    .js('src/js/onepage.js', 'public/js/')
    .sass('src/sass/styles.scss', 'public/css/')
    .sass('src/sass/onepage.scss', 'public/css/')
    .setPublicPath('public');

mix.copy('src/index.html', 'public/index.html');
mix.copyDirectory('src/assets/img/', 'public/assets/img/')
mix.copyDirectory('src/assets/fonts/', 'public/assets/fonts/')

mix.browserSync({
    "serveStatic": [
        "./public"
    ],
    "files": [
        "./public"
    ]
});
