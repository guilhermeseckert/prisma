import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      id: "user-1",
      name: "John",
      email: "john@example.com",
      groups: {
        connectOrCreate: {
          where: {
            id: "group-1",
          },
          create: {
            id: "group-1",
            title: "group 01",
          },
        },
      },
    },
  });
}

main();
