const { UserModel } = require("./user.model");
const bcrypt = require("bcrypt");


async function getUsers(req, res) {
    const users = await UserModel.find();
    res.status(200).json(users);
  }

async function getSingleUser(req, res) {
    const user = await UserModel.findOne({
      _id: req.params.id
    });
    
    res.status(200).json(user);
  }

async function addUser(req, res) {
  const existingUser = await UserModel.findOne({ 
    email: req.body.email
   });
   
  if(existingUser) {
    return res.status(409).json("Email already registered")
  }
  const user = new UserModel(req.body)
  user.password = await bcrypt.hash(user.password, 10)
  await user.save();

  const jsonUser = user.toJSON();
  jsonUser._id = user._id;
  delete jsonUser.password;

  res.status(201).send(jsonUser)
}

async function loginUser(req, res) {
  const existingUser = await UserModel.findOne({
    email: req.body.email,
  }).select("+password")

  if( 
    !existingUser || 
    !(await bcrypt.compare(req.body.password, existingUser.password))
  ) {
    return res.status(401).json("Wrong username or password")
  }
  const user = existingUser.toJSON();
  user._id = existingUser._id;
  delete user.password;

    // Check if user already is logged in
    if (req.session._id) {
      return res.status(200).json(user);
    }

  req.session = user;  
  res.status(200).json(user);
}

async function logout(req, res) {
  if (!req.session._id) {
      return res.status(400).json("Cannot logout when you are not logged in");
    }
  
  console.log(req.session);
  req.session = null;
  res.status(204).json("User logged out");
  }
  
  async function authorize(req, res) {
    console.log("Detta är i Auth på backend"); 
    if (!req.session) {
      return res.status(401).json("You are not logged in");
    }
  res.status(200).json(req.session);
}


module.exports = { addUser, getUsers, getSingleUser, loginUser, logout, authorize };