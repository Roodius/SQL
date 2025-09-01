import {Client} from "pg";


export async function  getClient(){
    const client = new Client('postgresql://neondb_owner:npg_VulfBr35xpga@ep-delicate-feather-a1orinwp-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require');
    await client.connect();
    return client;
}
    