import { PrismaClient } from "@prisma/client";

import { config } from "dotenv";

// Load .env so NIC_SSH_PUB_KEY_B64 is available during seeding
config({ path: new URL("../.env", import.meta.url).pathname });

const prisma = new PrismaClient();

async function main() {
  const User = await prisma.user.upsert({
    where: { id: 1 },
    update: {
      email: "admin@gmail.com",
      password: "123456",
      name: "superAdmin",
    },
    create: {
      id: 1,
      email: "admin@gmail.com",
      password: "123456",
      name: "superAdmin",
    },
  });
  console.log("✅ Seed data created successfully!");
  console.log({
    user: User.email,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
