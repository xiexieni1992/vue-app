require('./check-versions')()

process.env.NODE_ENV = 'production'

var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.test.conf')

var spinner = ora('building  for test... api_root:' + config.test.env.API_ROOT)
spinner.start()

rm(path.join(config.test.assetsRoot, config.test.assetsSubDirectory), err => {
    if (err) throw err
    webpack(webpackConfig, function(err, stats) {
        spinner.stop()
        if (err) throw err
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n\n')

        if (stats.compilation.errors && stats.compilation.errors.length) {
            process.exit(1);
        } else {
            console.log(chalk.cyan('  Build test complete.\n'))
            console.log(chalk.yellow(
                '  Tip: built files are meant to be served over an HTTP server.\n' +
                '  Opening index.html over file:// won\'t work.\n'))
        }

    })
})