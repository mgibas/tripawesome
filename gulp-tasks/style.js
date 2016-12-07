'use strict';
const cssSlam = require('css-slam').gulp;

function minify() {
    return cssSlam();
}

module.exports = {
    minify: minify
};
