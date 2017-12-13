'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

console.log(2323);

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    API_ROOT: '"http://localhost:9090"'
})