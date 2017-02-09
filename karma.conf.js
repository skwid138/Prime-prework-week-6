// Karma configuration
// Generated on Tue Dec 13 2016 14:28:51 GMT-0600 (CST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'fixture'],

    // list of files / patterns to load in the browser
    files: [
      '5-1/src/index.html',
      '5-1/src/vendors/jquery.min.js',
      '5-1/src/styles.css',
      '5-1/src/solution*.js',
      //'5-1/src/script*.js', //student code will be here
      '5-1/test/*.js',

      // TODO need to get the ** working here so we dont have duplicate lines
      '5-2/src/index.html',
      '5-2/src/vendors/jquery.min.js',
      '5-2/src/styles.css',
      // '5-2/src/imgs/*.png', // TODO image failing to load in PhantomJS
      '5-2/src/solution*.js',
      //'5-1/src/script*.js', //student code will be here
      '5-2/test/*.js',
      // {pattern: 'tests/**/*.js', included: false}
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '5-1/src/index.html': ['html2js'],
      '5-2/src/index.html': ['html2js']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
