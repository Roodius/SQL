import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient({log:['info','query']});


async function main() {
    const user =  await prisma.user.findMany({
        where:{
            email:{
                endsWith:"gmail.com"  // SELECT * FROM user WHERE email LIKE "%gmail.com%" //=> returun this users
            },
            posts:{  
                // has atleast one post published
                some:{
                    published:true
                }
            }
        },
        include:{     /// we are returing a published post
            posts:{
                where:{
                    published:true
                }
            }
        }
    })
    console.log(user)
}

main()
.then(async() => {
    console.log("done")
    await prisma.$disconnect()
}).catch(async(e) => {
    console.log(e);;
    await prisma.$disconnect();
    process.exit(1);
})