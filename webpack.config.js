const path = required('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    resolve: {

    }
}