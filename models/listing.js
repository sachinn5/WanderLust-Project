const mongoose = require("mongoose");
const Schema =  mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default:"https://unsplash.com/photos/hand-on-grass-with-daisies-in-dappled-light-92wWznBho1A",
        set: (v) => v === "" ? "https://unsplash.com/photos/hand-on-grass-with-daisies-in-dappled-light-92wWznBho1A" : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;