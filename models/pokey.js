const mongoose = require("mongoose");

const pokeySchema = new mongoose.Schema({
    name: {typr: String, required: true},
    image: {type: String, required: true },
    readyToBattle: Boolean,
});


const Pokey = mongoose.model("Pokey", pokeySchema);

module.exports = Pokey;