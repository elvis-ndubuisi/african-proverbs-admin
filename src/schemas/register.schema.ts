import { object, string, TypeOf } from "zod";

const registerSchema = object({
  email: string().min(1, "Email is required").email("Not a valid email"),
  username: string().min(1, "Username is required"),
  password: string().min(1, "Password is required"),
  confirmPassword: string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export type RegisterInput = TypeOf<typeof registerSchema>;
export default registerSchema;
