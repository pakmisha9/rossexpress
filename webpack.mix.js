let mix = require('laravel-mix');
require('mix-html-builder');

mix.js('src/js/app.js', 'dist');
mix.sass('src/scss/app.scss', 'dist');


mix.html({
    htmlRoot: './src/views/pages/*.html', // Your html root file(s)
    output: 'dist', // The html output folder
    partialRoot: './src/views/partials',    // default partial path
    layoutRoot: './src/views/layouts',    // default partial path
    minify: false,
    inject:false
});

mix.options({
    processCssUrls: false,
    postCss: [
        require("tailwindcss"),
        require("autoprefixer")
    ],
    terser: {},
    autoprefixer: {},
    legacyNodePolyfills: false
});

// mix.webpackConfig(require("./webpack.config"));


mix.browserSync({
    server: {
        baseDir: "dist",
        directory: true
    },
    startPath: "index.html",
    port: 8000,
    notify: false,
    files: [
        "src/views/**/*.html",
        "src/scss/*.scss",
        "src/js/*.js"
    ]
});
