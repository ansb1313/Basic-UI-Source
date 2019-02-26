const path = require('path');

module.exports = {
    mode: "development",
    entry: ['./web/assets/js/lib/jquery-1.12.2.min.js', './web/assets/js/lib/slick.js', './web/assets/js/script.js'],
    output: {
        path: path.join(__dirname, '/dist'),
        filename: "bundle.js"
    }
};