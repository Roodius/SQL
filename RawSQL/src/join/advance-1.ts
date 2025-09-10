import { getClient } from "../utils";


async function getUserAndTodowithjoin(userId:number) {
    const client = await getClient();
    const joinQuery  = `
        SELECT users.*, todos.title, todos.description, todos.done
        FROM users
        LEFT JOIN todos ON users.id = todos.user_id
        WHERE users.id = $1;
    `
    const res =  await client.query(joinQuery, [userId]);
    const results = res.rows;

    console.log("User And Todos: ", results);
}

getUserAndTodowithjoin(1);