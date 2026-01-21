import { PrismaClient } from "@prisma/client"

const prisma = global.prisma || new PrismaClient({
  // kalo mau pakai accelerateUrl, bisa ditambahin di sini
  // accelerateUrl: process.env.ACCELERATE_URL
})

if (process.env.NODE_ENV !== "production") global.prisma = prisma

export default prisma
