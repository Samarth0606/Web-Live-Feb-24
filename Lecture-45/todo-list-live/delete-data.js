
let getClient  = require('./utils');

async function deleteTodo(todoId){
    let client = await getClient();
    let deleteTodo = 'DELETE FROM todos WHERE id = $1';
    let response = await client.query(deleteTodo , [todoId]);
    console.log(response)
}
deleteTodo(1)

// module.exports = deleteTodo;



