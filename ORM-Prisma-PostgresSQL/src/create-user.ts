import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    prisma.user.create({
        data: {
            email:"osmansaifi30@gmail.com",
            name:"Roodius"
        }
    })
}

main()
.then(async() => {
    console.log("done with the query");
    await prisma.$disconnect();
})
.catch(async(e) => {
    console.log(e)
    await prisma.$disconnect();
    process.exit(1);
})