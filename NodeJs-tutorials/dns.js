var dns = require('dns');

dns.lookup('www.google.com', function onLookup(err, adress, family){
   console.log('adress:' + adress);
   dns.reverse(adress, function(err, hostnames){
      console.log('reverse for ' + adress + ': ' + JSON.stringify(hostnames)); 
   }); 
});