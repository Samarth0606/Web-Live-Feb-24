let getClient  = require('./utils');

async function getUsers(){
    let client = await getClient();
    let selectUserText =  'SELECT * FROM users';
    let userResponse = await client.query(selectUserText);
    // console.log(userResponse)  
    for(let users of userResponse.rows){
        console.log(`ID: ${users.id} , EMAIL: ${users.email}`)
    }
}


async function getUsersFromEmail(email){
    let client = await getClient();
    let selectUserText = 'SELECT * FROM users WHERE email=$1';
    let userResponse = await client.query(selectUserText , [email]);
    // console.log(userResponse)  
    for(let users of userResponse.rows){
        console.log(`ID: ${users.id} , EMAIL: ${users.email}`)
    }
}

async function getTodosForUser(userId){
    let client = await getClient();
    let selectTodoText = 'SELECT * FROM todos WHERE user_id = $1'
    let todoResponse = await client.query(selectTodoText , [userId]);
    // console.log(todoResponse)  
    for(let todo of todoResponse.rows){
        console.log(`ID: ${todo.id} , TITLE: ${todo.title}, DESCRIPTION:${todo.description} , DONE: ${todo.done}`)
    }
}


// getUsers();
// getUsersFromEmail('sam@gmail.com')
getTodosForUser(1)

// module.exports = createEntries;