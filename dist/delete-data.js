"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
async function deleteTodo(todoId) {
    const client = await (0, utils_1.getClient)();
    const selectTodosToDelete = 'DELETE  FROM todos WHERE id = $1';
    await client.query(selectTodosToDelete, [todoId]);
    console.log("deleted !");
}
deleteTodo(2);
//# sourceMappingURL=delete-data.js.map