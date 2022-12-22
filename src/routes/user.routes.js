const { controllerGetAllUsers, controllerGetUserById, controllerCreateUser, createTest, fakeControllerTest } = require("../controller/user.controller");
const { controllerGetName, controllerGetUserEmail } = require("../controller/user.controller");

function routeGetAll() { 
  return controllerGetAllUsers() 
}

function routeGetById(userId) {
  return controllerGetUserById(userId)
}

function createRoute() {
  controllerCreateUser()
}

function routeGetNameUser(name) { 
  return controllerGetName(name) 
}

function routeGetUserEmail(email){
  return controllerGetUserEmail(email)
}

module.exports = {
  routeGetAll,
  routeGetById,
  createRoute,
  routeGetNameUser,
  routeGetUserEmail
};
