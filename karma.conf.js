module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        files: [
            'src/**/*.js',
            'test/**/*.spec.js'
        ],
        browsers: ['Chrome'],
        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher'
        ],
        singleRun: true
    });
};