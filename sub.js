var nrp = require('./config');

nrp.on('albertcode_node', function(data){
  console.log('Hello ' + data.name);
});

nrp.on("error", function(){
  // Handle errors here
});
