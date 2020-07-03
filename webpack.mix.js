const mix = require('laravel-mix');
mix.autoload({ jquery: ['$', 'window.jQuery'] });

mix.options({
    publicPath: 'html',
    processCssUrls: false,
});
mix.webpackConfig({
    output: {
        publicPath: '/html',
    },
});

// mix.disableNotifications();
// mix.sass('src/scss/main.scss', 'html/build/css').sourceMaps(true, 'source-map');
mix.js('src/index.js', 'html/build/js').sourceMaps(true, 'source-map');
