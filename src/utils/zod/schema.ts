import { z } from "zod";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;

const SignUpSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "First Name must be at least 1 character" })
    .trim(),
  lastName: z
    .string()
    .min(1, { message: "Last Name must be at least 1 character" })
    .trim(),
  email: z.string().email({ message: "Invalid email address" }).trim(),
  password: z
    .string()
    .min(12, { message: "Password must be at least 12 characters long" })
    .max(64, { message: "Password must be at most 64 characters long" })
    .regex(passwordRegex, {
      message:
        "Password must include uppercase and lowercase letters, a number, and a special character",
    }),
});

const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(12, { message: "Password must be at least 12 characters long" })
    .max(64, { message: "Password must be at most 64 characters long" })
    .regex(passwordRegex, {
      message:
        "Password must include uppercase and lowercase letters, a number, and a special character",
    }),
});

export { SignUpSchema, LoginSchema };
