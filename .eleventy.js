const CleanCSS = require("clean-css");

module.exports = function (eleventyconfig) {
    eleventyconfig.addPasstroughCopy('src/assets/**/*')
    eleventyconfig.addFilter('cssmin', function (code) {
        return new CleanCSS({}).minify(code).styles;
    });

    return {
        dir: {
            input: 'src',
            output: 'build'
        }
    }
}