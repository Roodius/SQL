import { PrismaClient } from "@prisma/client";

const prisma  = new PrismaClient();

async function main() {
   const user = await prisma.user.update({
        where:{
            id:1
        },
        data:{
            name:"lumo"
        }
    });
    console.log(user);
}

main();