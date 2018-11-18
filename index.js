const fg = require('fast-glob');
const _=require('lodash');
var path = require("path");
var fileNameAll = fg.sync('allPDF/*.txt');
var fileNameGen = fg.sync('generatedVTO/*.txt');
var arrAll=[];
var arrGen=[];
const fs = require('fs-extra');


fileNameAll.forEach(function(element) {
arrAll.push(path.basename(element));
  });

fileNameGen.forEach(function(element) {
  arrGen.push(path.basename(element));
      });
var dif = _.differenceWith(arrAll, arrGen, _.isEqual);

dif.forEach(function(element) {
    
  fs.copySync('./allpdf/'+element, './vtoToGen/'+element)
        });


console.log(arrAll);
console.log(arrGen);
console.log(dif);
