import NextAuth from "next-auth/next";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import TwitterProvider from "next-auth/providers/twitter";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise, { connectDB } from "../../../components/lib/connectDB";
import Users from "../../../models/Users";
import { compare } from "bcryptjs";
import { createTransport } from "nodemailer";

connectDB();
export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        // check user existance
        const checkCode = await compare(
          credentials.code,
          credentials.generatedCode
        );
        if (!checkCode) {
          throw new Error("El codigo de verificacion es incorrecto.");
        }

        const user = await Users.findOne({ email: credentials.email });
        if (!user) {
          throw new Error("No se ha encontrado ningun usuario");
        }

        // compare()
        const checkPassword = await compare(
          credentials.password,
          user.password
        );

        // incorrect password
        if (!checkPassword || credentials.email !== credentials.email) {
          throw new Error("Email or Password doesn't match");
        }
        return user;
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/user/login",
  },
});
