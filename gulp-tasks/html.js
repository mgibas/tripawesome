'use strict';
const htmlMinifier = require('gulp-html-minifier');

function minify() {
    return htmlMinifier({ removeComments: true, collapseWhitespace: true });
}
module.exports = {
    minify: minify
};
