# is-it-wp
> Check if a website is built on Wordpress

[![Travis](https://img.shields.io/travis/ecrmnn/is-it-wp.svg?style=flat-square)](https://travis-ci.org/ecrmnn/is-it-wp.svg?branch=master)
[![npm version](https://img.shields.io/npm/v/is-it-wp.svg?style=flat-square)](http://badge.fury.io/js/is-it-wp)
[![npm downloads](https://img.shields.io/npm/dm/is-it-wp.svg?style=flat-square)](http://badge.fury.io/js/is-it-wp)
[![npm license](https://img.shields.io/npm/l/is-it-wp.svg?style=flat-square)](http://badge.fury.io/js/is-it-wp)

### Installation
```bash
npm install is-it-wp --save
```

### Usage
```javascript
const isitwp = require('is-it-wp');

isitwp('http://smashingmagazine.com')
  .then(isWordpress => {
    console.log(isWordpress);
    //=> true
  });
```

### License
MIT © [Daniel Eckermann](http://danieleckermann.com)