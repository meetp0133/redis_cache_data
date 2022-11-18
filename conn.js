const redis = require("redis")

let redisClient;
(async () => {
    redisClient = redis.createClient();  /*create a redis object this is default port 6379*/
    redisClient.on("error", (error) => /*on() method to register events on redis object.
	it take two arguments(err,callback)*/
        console.error(`ERROR : ${error}`));
    await redisClient.connect();/*It start coonecy with redis on default port 6379
	It gives promise so use await for resolve*/
})();

module.exports.redisClient = redisClient;