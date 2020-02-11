const mongoose = require("mongoose")
const passportLocalMongoose = require("passport-local-mongoose")

const userSchema = new mongoose.Schema({
        //NO PROPERTY FROM OURSELVES, ONLY FROM PASSPORT LOCAL MONGOOSE SO FAR
        role: {
            type: String,
            required: true
        },
        firstName: String,
        lastName: String,
        email: String
        //username from passportlocalmongoose
        //passwordhash from passportlocalmongoose
        //salt from passportlocalmongoose
        //you are free to add whatever field you have in mind for your document!!!
})

userSchema.plugin(passportLocalMongoose) //will add: username, password (encrypted) and some other methods

module.exports = mongoose.model("users", userSchema)

