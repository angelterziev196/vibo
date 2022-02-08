const MiniCssExtractPlugin = require('mini-css-extract-plugin').default;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

const INCLUDE_PATTERN = /<include src="(.+)"\s*\/?>(?:<\/include>)?/gi;
const processNestedHtml = (content, loaderContext, dir = null) =>
    !INCLUDE_PATTERN.test(content)
        ? content
        : content.replace(INCLUDE_PATTERN, (m, src) => {
              const filePath = path.resolve(dir || loaderContext.context, src);
              loaderContext.dependency(filePath);
              return processNestedHtml(
                  loaderContext.fs.readFileSync(filePath, 'utf8'),
                  loaderContext,
                  path.dirname(filePath),
              );
          });

let mode = 'development';
let target = 'web';

if (process.env.NODE_ENV === 'production') {
    mode = 'production';
    target = 'browserslist';
}

module.exports = {
    mode: mode,
    target: target,

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],

    entry: ['./src/index.js'],
    output: {
        assetModuleFilename: 'images/[hash][ext][query]',
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },

    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset',
            },
            {
                test: /\.s?css/i,
                use: [
                    {
                        // Adds CSS to the DOM by injecting a `<style>` tag
                        loader: 'style-loader',
                    },
                    {
                        // Interprets `@import` and `url()` like `import/require()` and will resolve them
                        loader: 'css-loader',
                    },
                    {
                        // Loader for webpack to process CSS with PostCSS
                        loader: 'postcss-loader',
                    },
                    {
                        // Loads a SASS/SCSS file and compiles it to CSS
                        loader: 'sass-loader',
                    },
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    preprocessor: processNestedHtml,
                },
            },
        ],
    },

    devtool: 'source-map',

    devServer: {
        static: ['./dist'],
        hot: true,
    },
};
