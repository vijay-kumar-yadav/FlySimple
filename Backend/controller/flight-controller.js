const FLIGHT = require('../model/flightSchema')
module.exports.FINDFLIGHTS = async (req, res) => {
    try {
        const flightsFetchedDb = await FLIGHT.find({ source: req.body.source, destination: req.body.destination });
        if (flightsFetchedDb.length == 0) {
            return res.status(400).json({
                message: "Currently No flights available for this route"
            })
        } else {
            return res.status(200).json({
                message: "Flights available",
                data: flightsFetchedDb
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: `error caught in catch block while searching for flights ${error}`
        })
    }
}