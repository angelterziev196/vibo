module.exports = {
    plugins: ['postcss-preset-env'],
    plugins: function () {
        return [require('autoprefixer')];
    },
};
