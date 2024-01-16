const path = require("path")

module.exports = {
    mode: 'development',
    entry: './index.ts',
    output: {
        path:path.resolve(__dirname,'dist'),
        filename: 'index.bundle.js',
    },
    module: {
        rules:[
            {
            test:/\.ts/,
            use: 'ts-loader',
            exclude: /node-modules/
            }
        ]
    },
    resolve: {
        extensions : ['.ts', '.js'] 
    }
}