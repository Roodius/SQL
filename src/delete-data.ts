import { getClient } from "./utils";

async function deleteTodo(todoId:number) {
    const client = await getClient();
    const selectTodosToDelete = 'DELETE  FROM todos WHERE id = $1'
    await client.query(selectTodosToDelete,[todoId]);
    console.log("deleted !");
}

deleteTodo(2)