# construx-less

Lead Maintainer: [Matt Edelman](https://github.com/grawk)

[![Build Status](https://travis-ci.org/krakenjs/construx-star.svg?branch=master)](https://travis-ci.org/krakenjs/construx-star)
[![NPM version](https://badge.fury.io/js/construx-star.png)](http://badge.fury.io/js/construx-star)

[construx](https://github.com/krakenjs/construx) plugin for JIT-compiling less resources to css during development of [express](http://expressjs.com/) applications.

## Requirements

Requires `less` to be installed in your project. Plugin is compatible and tested with `less@^v2.5.0`. It may work with older less but
that usage will not be officially supported.

## Usage

### Install

```shell
$ npm install --save-dev construx-less
```

### Configure

Where you configure your construx plugins:

```json
{
    "star": {
        "module": "construx-less",
        "files": "/star/**/*.css",
    }
}
```

_Note: See [construx README](https://github.com/krakenjs/construx/blob/master/README.md) for general usage of construx_

