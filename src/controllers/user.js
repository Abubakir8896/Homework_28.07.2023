const Io = require("../utils/Io");
const path = require("path");

const User = require("../models/User");
const {get} = require("../utils/get");

const Users = new Io(process.cwd() + "/database/registr.json");

const createUser = async (req, res) => {
  const {name, lastname, username ,password} = req.body;

  const users = await get(Users);

  const names=users.find((user) => user.username == username);

  if(names){
    res.status(404).json({message: "Already exist username"});
  }
  else{
  const id = (users[users.length - 1]?.id || 0) + 1;

  const newUser = new User(id, name, lastname, username,password);

  const result = users.length ? [...users, newUser] : [newUser];

  await Users.write(result);

  res.status(201).json({message: "CREATED"});
  }
};

const getAllUsers = async (req, res) => {
  const username= req.headers.authorization

  const users = await get(Users);

  const names=users.find((user) => user.username == username);

  if(names){
    res.json({users});
  }
  else{
    
    res.status(404).json({message: "You is a not registr"});
  }
  
};
const getOneUser = async (req, res) => {
  const {id} = req.params;

  const username= req.headers.authorization

  const users = await get(Users);

  const names=users.find((user) => user.username == username);

  if(names){
    const user = users.find((user) => user.id == id);
    user.view+=1
    Users.write([...users,user])
    res.json({user});
  }
  else{
    res.status(404).json({message: "You is a not registr"});
  } 
};

module.exports = {
  createUser,
  getAllUsers,
  getOneUser,
};

