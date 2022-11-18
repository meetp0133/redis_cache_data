const redis = require("redis");
const  redisClient = require("../conn").redisClient;

exports.cacheData =async (req,res,next)=>{
    const species = req.params.species;
    let results;
    try{

        const cacheResults = await redisClient.get(species);
        if(cacheResults){
            results = JSON.parse(cacheResults);
            res.send({
                fromCache:true,
                data:results,
            });
        }else{
            next();
        }
    }catch (e) {
        console.log(e)
        res.status(404);
    }
}
