import { getClient } from "./utils";

async function createEntries() {
    const client = await getClient();
    const insertUserText = 'INSERT INTO users (email, password) VALUES ($1 ,$2) RETURNING id';
    const userValues = ['osman@gmail.com','hashed_password-here2'];

    let response = await client.query(insertUserText,userValues);

    const insertTodosText = 'INSERT INTO todos (title,description,user_id,done) VALUES ($1, $2, $3, $4) RETURNING id';
    const todovalues  = ['buy something','milk, bread,and eggs,TV,movie', response.rows[0].id,false];
    await client.query(insertTodosText,todovalues);

    console.log("Entries created")

}   

createEntries();