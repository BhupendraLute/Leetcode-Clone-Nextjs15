import {PrismaClient} from '@prisma/client'
import { PrismaPg } from "@prisma/adapter-pg";


const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

const globalForPrisma = globalThis;

export const db = globalForPrisma.prisma || prisma;


if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db;