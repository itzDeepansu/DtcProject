import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import bcrypt from "bcrypt";
export async function GET() {
    const users = await prisma.user.findMany();
    if(!users){
        return NextResponse.json({ error: "Something went wrong" });
    }
    console.log(users);
    const pass = "123456789"
    const hashedPassword = await bcrypt.hash(pass, 10);
    console.log(hashedPassword);
  return NextResponse.json({ users });
}
