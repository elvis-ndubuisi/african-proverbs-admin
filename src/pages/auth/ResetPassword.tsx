import { SectionHeading } from "../../components/ui/Typography";
import FormGroup from "../../components/ui/FormGroup";
import InputLabel from "../../components/ui/InputLabel";
import Input from "../../components/ui/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import resetPasswordSchema, {
  ResetPasswordSchema,
} from "../../schemas/resetPassword.schema";

export default function ResetPassword() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ResetPasswordSchema>({
    resolver: zodResolver(resetPasswordSchema),
  });

  function onSubmit(values: ResetPasswordSchema) {
    console.log(values);
  }

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center my-4">
      <SectionHeading>Reset Password</SectionHeading>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg my-3 bg-gray-200 flex flex-col gap-3 rounded-md p-4"
      >
        <FormGroup>
          <InputLabel forAttr="email">email</InputLabel>
          <Input
            type="text"
            id="email"
            placeholder="registered@email.com"
            options={register("email")}
          />
          <span className="text-xs text-red-500" aria-live="assertive">
            {errors.email?.message}
          </span>
        </FormGroup>

        <button
          type="submit"
          className="px-2 py-3 bg-polar-green-700 text-white font-bold rounded-lg hover:opacity-80 focus:ring-2 focus:ring-white"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
}
