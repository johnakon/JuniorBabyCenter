const express = require("express");
const router = express.Router();
const parent = require("../models/babySitterModel");


/* Routes */
//Get reads the registerform.pug and displays it on the path
router.get("/", (req, res) => {
  res.render("register");
});

//extracts all data for the database and displays it
router.post("/", async (req, res) => {
    console.log(req.body)
  const register = new parent(req.body); //create an instance of the Register model for data entered(req.body==got from the user)
  console.log(register);
  try {
    await register.save();
    console.log("Item has been saved");
    const items = await parent.find();
    // res.render("list", { users: items });
    return res.redirect("/index")
  } catch(err) {
    //.catch promise and used because nodejs asyncronously waits
    console.log(err)
    res.status(500).send("unable to save to database");
    // res.render('register')
  }
});

// //reutrns a specific page
// router.get("/search", async (req, res) => {
//   if (req.session.user) {

//     const items = await Register.find()
//     res.render('list', { users: items, currentUser: req.session.user })

//   } else {
//     res.redirect('/login')
//   }
// });

module.exports = router;