import { object, string, TypeOf } from "zod";

const resetPasswordSchema = object({
  email: string().min(1, "Email is required").email("Not a valid email"),
});

export type ResetPasswordSchema = TypeOf<typeof resetPasswordSchema>;
export default resetPasswordSchema;
