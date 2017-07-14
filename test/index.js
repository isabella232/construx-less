/*───────────────────────────────────────────────────────────────────────────*\
 │  Copyright (C) 2017 PayPal Software Foundation                                │
 │                                                                             │
 │hh ,'""`.                                                                    │
 │  / _  _ \  Licensed under the Apache License, Version 2.0 (the "License");  │
 │  |(@)(@)|  you may not use this file except in compliance with the License. │
 │  )  __  (  You may obtain a copy of the License at                          │
 │ /,'))((`.\                                                                  │
 │(( ((  )) ))    http://www.apache.org/licenses/LICENSE-2.0                   │
 │ `\ `)(' /'                                                                  │
 │                                                                             │
 │   Unless required by applicable law or agreed to in writing, software       │
 │   distributed under the License is distributed on an "AS IS" BASIS,         │
 │   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  │
 │   See the License for the specific language governing permissions and       │
 │   limitations under the License.                                            │
 \*───────────────────────────────────────────────────────────────────────────*/
/*global describe, it, beforeEach, afterEach*/

'use strict';


var test = require('tap').test,
  path = require('path'),
  Less = require(path.resolve(__dirname, '..')),
  less = Less({}),
  fs = require('fs');

test('construx-less', function (t) {

    t.test('processes a good less file', function (t) {
        t.plan(1);
        //get good less file
        fs.readFile(path.resolve(__dirname, 'css/app.less'), function (err, data) {
            less(data, {paths: '', context: {name: 'app.css'}}, function (err, css) {
                t.notEqual(-1, css.indexOf('body a span'));
                t.end();
            });

        });

    });

    t.test('process a bad less file', function (t) {
        t.plan(1);
        //get bad less file
        fs.readFile(path.resolve(__dirname, 'css/bad.less'), function (err, data) {
            less(data, {paths: '', context: {name: 'bad.css'}}, function (err, css) {
                t.ok(err.type === 'Parse');
                t.end();
            });

        });
    });

});