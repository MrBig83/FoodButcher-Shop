const { UserModel, Topic } = require("./user.model");

async function addUser(req, res, next) {
    const user = await new UserModel(req.body)

    user.save();
    res.status(201).json(user)
}

async function getUsers(req, res) {
    const users = await UserModel.find();
    res.status(200).json(users);
  }

async function getSingleUser(req, res) {
    const user = await UserModel.findOne({
      id: req.params.id
    });
    res.status(200).json(user);
  }

// module.exports = { addProduct, getProducts, getSingleProduct };
module.exports = { addUser, getUsers, getSingleUser };