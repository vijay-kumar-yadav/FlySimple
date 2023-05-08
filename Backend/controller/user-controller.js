const USER = require('../model/userSchema');
module.exports.CREATEUSER = async (req, res) => {
    console.log(req.body);
    try {
        const userFetchedDb = await USER.findOne({ email: req.body.email });
        if (userFetchedDb) {
            return res.status(400).json({
                message: "user already registered , please login"
            })
        } else {
            //admin 
            const newUser = await USER.create(req.body);
            return res.status(200).json({
                message: "user created",
                data: newUser
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: `error caught in catch block while creating user, error is ${error}`
        })
    }
}

module.exports.createSession = {

}

module.exports.deleteSession = {

}

