'use strict';

const babel = require('gulp-babel');

// Returns a function that returns a Promise to delete directories
function babelize() {
    return babel({ presets: ['es2015'] });
}

module.exports = {
    babelize: babelize
};
