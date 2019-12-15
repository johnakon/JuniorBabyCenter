const mongoose = require("mongoose")
// const bcryptjs = require("bcryptjs");


/* Creating a Database Schema....schema should be the same format as req.body */
const parentRegister = new mongoose.Schema({
  firstname:{ type:String, required : "firstname required"},
  lastname:{ type:String, required : "lastname required"},
  email:{ type:String, required : "email required"},
  address:{ type:String, required : "address required"},
  district: {type: String, required: "Your district is required"},
  dob: {type: Date, required: "Please enter your date of birth"},
  telno:{ type:Number, required : "Telephone no. required"},
  duration: {type: String, required: "this field is required"},
  availability: {type: String, required: "Please enter this field"},
  behavior:{type: String, required: "this field is required"},
  preferedClub:{ type:String, required : "club required"},
  activities:{ type:String, required : "list activities required"},
  preferedClub:{ type:String, required : "club field required"},

})

//hashing a password before saving it to the database pre-save hook---------
/* hashing and salting(encrypting).....salt is the no. e.g 10..changes it 10 times
your password is saved as a string not your actual password i.e encrypts it */
// parentRegister.pre('save', function(next){
//   this.password = bcryptjs.hashSync(this.password, 10);
//   next()
// });


// parentRegister.statics.authenticate = async function(username, password) {
//   const user = await this.findOne({ username: username });
//   if (!user) {
//     throw new Error("User not found.");
//   }
//   const match = await bcryptjs.compare(password, user.password);
//   if (match) {
//     return user;
//   }
// };

  //create a model
  module.exports=mongoose.model("parent",parentRegister);