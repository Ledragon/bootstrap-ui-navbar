module.exports = function () {
    var config = {
        //temporary directory to store build crap
        temp: './_tmp',
        // all js to vet
        alljs: [
            './src/**/*.js',
            './*.js'
        ],
        htmlTemplates: './src/**/*.html',
        templateCache: {
            file: 'template.js',
            options: {
                module: 'ld-framework',
                standAlone: 'false',
                root:'src'
            }
        }
    };
    return config;
};