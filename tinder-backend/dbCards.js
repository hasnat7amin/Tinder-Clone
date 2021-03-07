import mongoose from 'mongoose'
const schema = mongoose.Schema();
const cardSchema = new schema({
    name : String,
    Url : String
})

export default mongoose.model("cardSchema", cardSchema)