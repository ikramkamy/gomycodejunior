const mongoose = require('mongoose');
const { Schema } = mongoose;

const InfoSchema = new Schema({
    name:{
type:String,

    },
  text: { type: String, required: true },
 auteur:{
     type:String,
 }
 
});

const Info= mongoose.model('post', InfoSchema);

module.exports = Info;