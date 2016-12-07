'use strict';
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');


function babelize() {
    return babel({ presets: ['es2015'] });
}

function minify() {
    return uglify();
}
module.exports = {
    babelize: babelize,
    minify: minify
};
