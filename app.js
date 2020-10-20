var redis = require('redis');
var client = redis.createClient();

client.on('connect', function() {
    console.log('connected!')
})

client.set('total', '1800');

client.hmset('languages', 'portuguese', 'english', 'spanish', 'british')
client.hgetall('languages', function(err, object) {
    console.log(object)
})