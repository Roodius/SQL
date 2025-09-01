"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClient = getClient;
const pg_1 = require("pg");
async function getClient() {
    const client = new pg_1.Client('postgresql://neondb_owner:npg_VulfBr35xpga@ep-delicate-feather-a1orinwp-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require');
    await client.connect();
    return client;
}
//# sourceMappingURL=utils.js.map