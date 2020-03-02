const fs = require('fs-extra');
const concat = require('concat');

concatenate = async () =>{
    const files = [
        './dist/table-widget/runtime-es5.js',
        './dist/table-widget/polyfills-es5.js',
        './dist/table-widget/polyfills-es2015.js',
        './dist/table-widget/scripts.js',
        './dist/table-widget/main-es5.js'
      ];

      await fs.ensureDir('output');
      await concat(files, 'output/table-widget.js');
}
concatenate();
