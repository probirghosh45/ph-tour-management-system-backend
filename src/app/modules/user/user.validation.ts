import { z } from "zod";

export const createUserZodSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(50, { message: "Name cannot exceed 50 characters" }),

  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address format." })
    .min(5, { message: "Email must be at least 5 characters long." })
    .max(100, { message: "Email cannot exceed 100 characters." }),

  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[0-9]/, { message: "Password must contain at least 1 number" })
    .regex(/[!@#$%^&*(),.?":{}|<>]/, {
      message: "Password must contain at least 1 special character",
    }),

  address: z
    .string()
    .max(200, { message: "Address cannot exceed 200 characters" })
    .optional(),

  phone: z
    .string()
    .regex(/^(\+8801[3-9]\d{8}|01[3-9]\d{8})$/, {
      message:
        "Phone number must be valid for Bangladesh. Format: +8801XXXXXXXXX or 01XXXXXXXXX",
    })
    .optional(),
});
