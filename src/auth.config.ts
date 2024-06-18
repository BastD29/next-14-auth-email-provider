import { NextAuthConfig } from "next-auth";
// @deprecated
// Import this provider from the providers/nodemailer submodule instead of providers/email.

// To log in with nodemailer, change signIn("email") to signIn("nodemailer")
// import EmailProvider from "next-auth/providers/email";
import EmailProvider from "next-auth/providers/nodemailer";

export default {
  providers: [
    EmailProvider({
      id: "email",
      name: "email",
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
} satisfies NextAuthConfig;
