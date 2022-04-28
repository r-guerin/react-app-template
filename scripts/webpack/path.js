const { resolve } = require('path');
const { cwd } = require('process');

const BUILD_DIRECTORY_NAME = 'dist';
const BUILD_DIRECTORY_PATH = resolve(cwd(), BUILD_DIRECTORY_NAME);

module.exports = {
  BUILD_DIRECTORY_PATH,
};
