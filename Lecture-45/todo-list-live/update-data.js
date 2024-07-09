let getClient  = require('./utils');

async function updateTodo(todoId){
    let client = await getClient();
    let updateTodo = 'UPDATE todos SET done = $1 WHERE id = $2';
    let response = await client.query(updateTodo , [true , todoId]);
    console.log(response)
}
updateTodo(1)

module.exports = updateTodo;