"use server";

import { LoginSchema, SignUpSchema } from "@/utils/zod/schema";
import prisma from "../../../db";
import { revalidatePath } from "next/cache";

interface UserCredentials {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

async function signUp(formData: FormData) {
  const data = {
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
  const validation = SignUpSchema.safeParse(data);
  if (!validation.success) {
    console.log(validation.error);
  }
  try {
    await prisma.user.create({
      data,
    });
    revalidatePath("/signup");
  } catch (err) {
    console.log(err);
  }
}

async function login(formData: FormData) {
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
  const validation = LoginSchema.safeParse(data);
  if (!validation.success) {
    return validation.error.formErrors.fieldErrors;
  }
  try {
    return await prisma.user.findUnique({ where: data });
  } catch (error) {
    console.log(error);
  }
}

export { signUp, login };
