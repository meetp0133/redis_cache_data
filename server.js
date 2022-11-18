const express = require("express");
// const axios = require("axios")
// const redis = require("redis");
const app = express();
const port = process.env.PORT || 3001;

//
// let redisClient;
// (async () => {
// 	redisClient = redis.createClient();  /*create a redis object this is default port 6379*/
// 	redisClient.on("error", (error) => /*on() method to register events on redis object.
// 	it take two arguments(err,callback)*/
// 		console.error(`ERROR : ${error}`));
// 	await redisClient.connect();/*It start coonecy with redis on default port 6379
// 	It gives promise so use await for resolve*/
// })();

app.use(express.json())

const routes = require("./route/getData.route")
app.use(routes)
// async function fetchApiData(species) {
// 	const apiResponse = await axios.get(
// 		`https://www.fishwatch.gov/api/species/${species}`
// 	);
// 	console.log("Request sent to the API");
// 	return apiResponse.data;
// }

// This middaleware handle the cache data retrieval.
// async function cacheData(req,res,next){
// 	const species = req.params.species;
// 	let results;
// 	try{
// 		const cacheResults = await redisClient.get(species);
// 		if(cacheResults){
// 			results = JSON.parse(cacheResults);
// 			res.send({
// 				fromCache:true,
// 				data:results,
// 			});
// 		}else{
// 			next();
// 		}
// 	}catch (e) {
// 		console.log(e)
// 		res.status(404);
// 	}
// }

// async function getSpeciesData(req, res) {
// 	const species = req.params.species;
// 	let results
// 	// let isCached = false;
// 	try {
// 		// const cacheResults = await redisClient.get(species);
// 		// if (cacheResults) {
// 		// 	isCached = true;
// 		// 	results = JSON.parse(cacheResults);
// 		// } else {
// 			results = await fetchApiData(species)
// 			if (results.length === 0) {
// 				throw "API returned an empty array";
// 			}
// 			await redisClient.set(species,JSON.stringify(results),{
// 				EX:60 /*3 minutes*/,
// 				NX:true
// 			})/*To store data in redis*/
// 		// }
// 		res.send({
// 			fromCache: false,
// 			data: results,
// 		})
// 	} catch (e) {
// 		console.log(e)
// 		res.status(404).send("Data unavailable..!")
// 	}
// }

// app.get("/fish/:species", cacheData,getSpeciesData);

app.listen(port, () => {
    console.log(`App listeningon port ${port}`)
});

