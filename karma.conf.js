module.exports = function(config) {
    config.set({

        basePath: '',

        files: [
            //Standard Libs
            './node_modules/angular/angular.js',
            './node_modules/angular-mocks/angular-mocks.js',
            './node_modules/angular-messages/angular-messages.js',
            './node_modules/angular-ui-router/build/angular-ui-router.js',
            './app/libs/ui-bootstrap-tpls-0.13.4.js',

            // Src Files
            './app/src/*.js',
            './app/src/commons/*.js',
            './app/src/contactProfile/*.js',

            //Html Files
            "./app/src/contactProfile/profileView/*.html",

            // Test Files
            './app/test/commons/*.js',
            './app/test/mocks/*.js',
            './app/test/contactProfile/*.js',
        ],
        // here we specify which of the files we want to appear in the coverage report
        preprocessors: {
            //Coverage
            './app/src/*.js': ['coverage'],
            './app/src/commons/*.js': ['coverage'],
            './app/src/contactProfile/*.js': ['coverage'],

            //Directive templates to be compiled
            // './sentinel_admin_console/*.html': ['ng-html2js'],
            // './app/src/contactProfile/profileView.html': ['ng-html2js'],
            './contacts_manager_app/src/contactProfile/profileView.html': ['ng-html2js']
        },



        // add the coverage plugin
        plugins: ['karma-jasmine', 'karma-chrome-launcher', 'karma-coverage', 'karma-ng-html2js-preprocessor'],
        // // add coverage to reporters
        reporters: ['progress', 'coverage'],

        ngHtml2JsPreprocessor: {
            // create a single module that contains templates from all the files
            stripPrefix: 'contacts_manager_app/',
            moduleName: 'contactApp.Templates'
        },
        // // tell karma how you want the coverage results
        coverageReporter: {
            type: 'html',
            // where to store the report
            dir: './app/testcoveragereport/'
        },

        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: true,
        frameworks: ['jasmine'],

        browsers: ['Chrome'],

    });
};
