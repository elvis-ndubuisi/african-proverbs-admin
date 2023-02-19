import { object, string, TypeOf } from "zod";

const loginSchema = object({
  email: string().min(1, "Email is required").email("Not a valid email"),
  password: string().min(1, "Password is required"),
});

export type LoginInput = TypeOf<typeof loginSchema>;
export default loginSchema;
