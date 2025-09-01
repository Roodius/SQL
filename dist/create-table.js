"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
async function createTable() {
    const client = await (0, utils_1.getClient)();
    const createUersTableQuery = `
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        );
    `;
    await client.query(createUersTableQuery);
    const createTodosTableQuery = `
        CREATE TABLE todos (
            id SERIAL PRIMARY KEY,
            title TEXT NOT NULL,
            description TEXT,
            user_id INTEGER REFERENCES users(id),
            done BOOLEAN DEFAULT FALSE
        )
    `;
    await client.query(createTodosTableQuery);
    console.log("table created successfully");
}
createTable();
//# sourceMappingURL=create-table.js.map