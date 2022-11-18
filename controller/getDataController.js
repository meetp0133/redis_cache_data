const {fetchApiData} = require("../modelApi/fishWatch")
const redisClient = require("../conn").redisClient;

exports.getSpeciesData = async (req, res) => {
    const species = req.params.species;
    let results
    try {
        results = await fetchApiData(species)
        if (results.length === 0) {
            throw "API returned an empty array";
        }
        await redisClient.set(species, JSON.stringify(results), {
            EX: 60 /*minutes to second after apply*/,
            NX: true
        })
        res.send({
            fromCache: false,
            data: results,
        })
    } catch (e) {
        console.log(e)
        res.status(404).send("Data unavailable..!")
    }
}
