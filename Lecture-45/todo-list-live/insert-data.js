let getClient  = require('./utils');

async function createEntries(){
    let client = await getClient();
    //users
    //sql injection -> data breach - so $1, $2
    let insertUserText = 'INSERT INTO users (email,password) VALUES ($1 , $2) RETURNING id';
    let userValues = ['sam@gmail.com' , '123'];
    let response = await client.query(insertUserText , userValues);
    // console.log(response.rows[0].id);

    //todos
    let insertTodoText = 'INSERT INTO todos (title,description,user_id,done) VALUES ($1,$2,$3,$4) RETURNING id';
    let todoValues = ['buy grocery' , 'milk , egg , bread' , response.rows[0].id , false ];
    await client.query(insertTodoText , todoValues);
    console.log("entries are created")
}

module.exports = createEntries;