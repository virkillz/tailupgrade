



var argv = require('yargs').argv;

filename = process.argv

if (typeof filename[2] == 'undefined') {
	console.log("Need path to filename as argument");
	return;
}

var fs = require('fs')
fs.readFile(filename[2], 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/tracking-tight/g, 'tracking-tighter')
		   .replace(/tracking-wide/g, 'tracking-wider')
	           .replace(/darkest/g, '900')
	           .replace(/darker/g, '800')
	           .replace(/dark/g, '700')
	           .replace(/lighter/g, '200')
	           .replace(/lightest/g, '100')
	           .replace(/light/g, '400')
		   .replace(/grey/g, 'gray')
                   .replace(/(gray|indigo|red|blue|yellow|primary|secondary|danger|success|warning|green|teal|pink|purple) /g, '$1-500 ')
                   .replace(/(gray|indigo|red|blue|yellow|primary|secondary|danger|success|warning|green|teal|pink|purple)"/g, '$1-500 ')
                   .replace(/list-reset/g, "")
	           .replace(/pin-none/g, "inset-auto")
	           .replace(/pin-y/g, "inset-y-0")
	           .replace(/pin-x/g, "inset-x-o")
	           .replace(/pin-t/g, "top-0")
	           .replace(/pin-r/g, "right-0")
	           .replace(/pin-b/g, "bottom-0")
	           .replace(/pin-l/g, "left-0")
	           .replace(/pin /g, "inset-0")
	           .replace(/pin"/g, "inset-0")
	           .replace(/flex-no-grow/g, "flex-grow-0")
	           .replace(/flex-no-shrink/g, "flex-shrink-0")
	           .replace(/roman/g, "not-italic")
	           .replace(/max-w-md/g, "max-w-xl")
                   .replace(/max-w-xl/g, "max-w-6xl")
	           .replace(/max-w-lg/g, "max-w-4xl");

  fs.writeFile('output.html', result, 'utf8', function (err) {
     if (err) 
	  {console.log(err);}
	  else
          {console.log("Done. Check output.html")}
	  ;
  });
});
