const {createClient} = require('redis') ;

const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS ,
    socket: {
        host: 'redis-13204.c330.asia-south1-1.gce.cloud.redislabs.com',
        port: 13204
    }
});


module.exports = redisClient ;
