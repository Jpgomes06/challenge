const { fakeCreateUserSv, getUsersSv, getUserByIdSv, getUserByNameSv, GetUserByEmail} = require("../service/user.service");

function controllerGetAllUsers() { 
  return getUsersSv() 
}

function controllerGetUserById(userId) { 
  const userFound = getUserByIdSv(userId);
  if(userFound.length > 0){
    return userFound;
  } else {
    return {
      message: "User not found",
      status: 400
    }
  }
}

function controllerGetName(name){ 
 const userFound = getUserByNameSv(name);
 if(userFound.length > 0){
   return userFound;  
 } else {
    return {
      message: "User not found",
      status: 400
    }
  }  
}

function controllerGetUserEmail(email){ 
  const userFound = GetUserByEmail(email) 
  if(userFound.length > 0){
    return userFound;
  } else {
    return {
      message: "User not found",
      status: 400
    }
  }
}

function controllerCreateUser() { 
  fakeCreateUserSv() 
}

function createTest() {}

function fakeControllerTest() {
  try {
    const test = fakeServiceTest();
    return {
      succes: true,
      status: 200,
      data: test,
    };
  } catch (error) {
    return {
      succes: false,
      status: 500,
      data: error,
    };
  }
}

module.exports = {
  controllerGetAllUsers, 
  controllerGetUserById,
  controllerGetName,
  controllerGetUserEmail,
  controllerCreateUser, 
  createTest,  
  fakeControllerTest
 };
