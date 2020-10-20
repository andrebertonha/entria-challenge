var redis = require('redis');
var client = redis.createClient();

client.on('connect', function() {
    console.log('connected!')
});

client.set('total', '1800');

client.hmset('languages', 'portuguese', 'english', 'spanish', 'british')
client.hgetall('languages', function(err, object) {
    console.log(object);
});

client.rpush(['frameworks', 'angular', 'react', 'vue'], function (err, reply) {
console.log(reply); 
});

client.lrange('frameworks', 0, -1, function(err, reply){
    console.log(reply);
});

client.sadd(['tags', 'angularjs', 'angularjs', 'backbonejs', 'emberjs'], function(err, reply){
    console.log(reply);
});

client.smembers('tags', function(err, reply){
    console.log(reply);
});