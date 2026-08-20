import { PrismaClient } from "@prisma/client";

export const prismaEdge = new PrismaClient({
  omit: {
    user: { passwordHash: true },
  },
});
