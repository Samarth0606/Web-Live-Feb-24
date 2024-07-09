let getClient  = require('./utils');

async function createTables(){
    let client = await getClient();
    
    //user
    let createUserTable = `CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(250) UNIQUE NOT NULL,
        password VARCHAR(250) NOT NULL
    )`;
    await client.query(createUserTable);

    //todo
    let createTodoTable = `CREATE TABLE todos (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT,
        user_id INTEGER REFERENCES users(id) ,
        done BOOLEAN DEFAULT FALSE
    )`;
   
    await client.query(createTodoTable);
    console.log("tables are created")
}

module.exports = createTables;
