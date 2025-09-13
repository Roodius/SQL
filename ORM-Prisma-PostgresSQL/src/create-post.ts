import { PrismaClient } from "@prisma/client";


const prisma  =  new PrismaClient({log:['info', 'query','error']});


async function main() {
    await prisma.post.create({
        data:{
            title:"how many",
            content:"boys",
            author:{
                connect:{ id:1 }
            },
            published:true
        }
    })
}

main();