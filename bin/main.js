#! /usr/local/bin/node

var readJson = require('read-package-json');

readJson('../opts.json', console.error, false, function(er, data) {
   if (er) {
      console.error("There was an error reading the file: ", er);
      return
   }
   console.log('data.globals.tabLength: ', data.globals.tabLength);
   console.log('data.views.pathFormat', data.views.pathFormat);
   var paths = data.views.pathFormat.split('/');
   console.log('paths: ', paths);
});