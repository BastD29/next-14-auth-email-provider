"use server";

import { LoginSchema } from "@/schemas";
import { z } from "zod";
import { signIn } from "@/auth";
// import { prisma } from "@/lib/database";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  // const confirmationLink = "http://localhost:3000/confirm-email";

  //   Check to see if data is valid
  const isValid = LoginSchema.safeParse(values);
  console.log(isValid);

  if (!isValid.success) {
    throw new Error("Email is not valid");
  }

  const { email } = isValid.data;

  signIn("email", { email, redirectTo: "/dashboard" });

  return { success: `Email sent to ${email}` };
};
