"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
async function getUserAndTodowithjoin(userId) {
    const client = await (0, utils_1.getClient)();
    const joinQuery = `
        SELECT users.*, todos.title, todos.description, todos.done
        FROM users
        LEFT JOIN todos ON users.id = todos.user_id
        WHERE users.id = $1;
    `;
    const res = await client.query(joinQuery, [userId]);
    const results = res.rows;
    console.log("User And Todos: ", results);
}
getUserAndTodowithjoin(1);
//# sourceMappingURL=advance-1.js.map