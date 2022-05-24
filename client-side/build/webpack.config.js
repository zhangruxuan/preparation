const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

// const path = require('path')
//运行在node下的 使用node模块
module.exports = {
    entry: './src/index.ts',
    
    // entry: path.join(__dirname, './src/index.ts'),
    output: {
        filename: "main.js"
    },
    resolve: {
        //from的时候可以省略文件名后缀.js
        extensions: ['.ts','.tsx','.js']
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            //排除
            exclude:/node_modules/
        }]
    },
    //方便调试时定位代码 开发时使用
    devtool:process.env.NODE_ENV === 'production'? false : 'inline-source-map',
    devServer: {
        //运行时根目录
        contentBase: './dist',
        //控制台打印信息
        stats:'errors-only',
        //不启动压缩
        compress:false,
        //
        host:'localhost',
        port:8089

    },
    plugins: [
        new CleanWebpackPlugin({
            //在build之前先清理掉
            cleanOnceBeforeBuildPatterns: ['./dist']
        }),
        new HtmlWebpackPlugin({
            //制定编译时的html模板
            template: './src/template/index.html'
        })
    ]
}