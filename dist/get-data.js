"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
async function getUsers() {
    const client = await (0, utils_1.getClient)();
    const selectUserText = 'SELECT * FROM users';
    const userRes = await client.query(selectUserText);
    console.log("Users: ");
    for (let user of userRes.rows) {
        console.log(`ID: ${user.id}, Email: ${user.email}`);
    }
    console.log("query done !");
}
async function getUserFromEmail(email) {
    const client = await (0, utils_1.getClient)();
    const selectUserText = 'SELECT * FROM users WHERE email = $1';
    const userRes = await client.query(selectUserText, [email]);
    console.log("Single User Deatils: ");
    for (let user of userRes.rows) {
        console.log(`ID: ${user.id}, Email: ${user.email}`);
    }
    console.log("query Done");
}
async function getTodosForUser(userId) {
    const client = await (0, utils_1.getClient)();
    const selectTodosText = 'SELECT * FROM todos WHERE user_id=$1';
    const todoRef = await client.query(selectTodosText, [userId]);
    console.log(` Todo for userID:${userId}`);
    for (let todo of todoRef.rows) {
        console.log(`ID: ${todo.id}, todo: ${todo.title}, description: ${todo.description},Done: ${todo.done}`);
    }
    console.log("Query Done !");
}
getUsers();
setTimeout(() => {
    getUserFromEmail('emee@gmail.com');
}, 2000);
setTimeout(() => {
    getTodosForUser(2);
}, 3000);
//# sourceMappingURL=get-data.js.map