'use strict'

const fs = require('fs-extra')

fs.removeSync('dist')
fs.copySync('build', 'dist')
