import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({log:['info','query']});


async function main() {
    await prisma.user.delete({
        where:{
            id:1,
            email:"osmansaifi30@gmail.com"
        },
        
    })
}

main();