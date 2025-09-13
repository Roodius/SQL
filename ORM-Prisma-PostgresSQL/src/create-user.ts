import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.user.create({
        data: {
            email:"osmansaifi40@gmail.com",
            name:"celfie"
        }
    })
}

main()
// .then(async() => {
//     console.log("done with the query");
//     await prisma.$disconnect();
// })
// .catch(async(e) => {
//     console.log(e)
//     await prisma.$disconnect();
//     process.exit(1);
// })