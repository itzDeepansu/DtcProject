import NextAuth from "next-auth/next";
import prisma from "../../../libs/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "deepansu" },
        password: {
          label: "password",
          type: "password",
        },
      },
      async authorize(credentials) {
        console.log(credentials);
        const users = await prisma.user.findMany({
          where: {
            email: credentials.email,
          },
        });
        const user = users[0];
        console.log("Entered in users",user);
        console.log("credentials ", credentials);
        if (!user || !user.hashedpassword) {
          throw new Error('Wrong account') ;
        }
        const isMatched = await bcrypt.compare(
          credentials.password,
          user.hashedpassword
          );
          if (!isMatched) {
            throw new Error('Wrong password') ;
        }
        return user;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV === "development",
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };