var fs   = require('fs');
var argv = require('argv');

argv.option({
    name : 'file',
    short : 'f',
    type : 'string',
    description : "Target service. You can run after complete router.json",
    example : "make_api.js -f text"
});

var argvs = argv.run();
var router = JSON.parse(fs.readFileSync("./" + argvs.targets + "/router.json"));

for( api in router ){
    var apiName   = api;
    var apiDetail = router[api];

    var tmpl = fs.readFileSync("./api.tmpl").toString();
    var apiSource = tmpl.replace(/<>/g,apiName);

    fs.writeFile("./" + argvs.targets + "/" + apiName + ".js", apiSource,function(err){
        if(err) console.log(err);
    });

}