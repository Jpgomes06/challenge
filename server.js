const { routeGetAll, routeGetById, createRoute, routeGetNameUser, routeGetUserEmail } = require("./src/routes/user.routes");

function frontEnd1() { createRoute() }

function frontEnd2() { 
    const allUsers = routeGetAll();
    console.log(allUsers)
}

function frontEnd3(userId) { 
    const userFound = routeGetById(userId);
    console.log(userFound);
}

function frontEnd4(name) { 
    const userFound = routeGetNameUser(name)  
    console.log(userFound);   
}

function frontEnd5(email) { 
    const userFound = routeGetUserEmail(email);
    console.log(userFound);
}


// frontEnd1(); /*logar mensagem*/
// frontEnd2(); /*Listar todos os usuários*/
// frontEnd3(2); /*Listar um usuário pelo id*/
// frontEnd4("Patricia Lebsack"); /*Listar um usuário pelo nome*/
// frontEnd5("Sincere@april.biz"); /*Listar um usuário pelo email */


