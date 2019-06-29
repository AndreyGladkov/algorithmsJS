const path = require('path');

module.exports = {
    transform: {
        '^.+\\.(js)$': path.resolve(__dirname, './node_modules/babel-jest'),
    },
};
