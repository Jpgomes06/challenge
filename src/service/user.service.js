const { findAllUsers, create, findById, findByName, findByEmail, functionalTest} = require("../db/mysql");

function fakeCreateUserSv() { 
  return create() 
}

function getUsersSv() { 
  return findAllUsers()
}

function getUserByIdSv(userId) {
  const userFound = findById(userId);
  return userFound;
}

function getUserByNameSv(name){
  const usersFound = findByName(name)   
  return usersFound
}

function GetUserByEmailSv(email){
  const userFound = findByEmail(email) 
  return userFound
}

module.exports = {
  fakeCreateUserSv,
  getUsersSv,
  getUserByIdSv,
  getUserByNameSv,
  GetUserByEmailSv
};
