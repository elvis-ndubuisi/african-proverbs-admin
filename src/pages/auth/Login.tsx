import { SectionHeading } from "../../components/ui/Typography";
import FormGroup from "../../components/ui/FormGroup";
import InputLabel from "../../components/ui/InputLabel";
import FormFooter from "../../components/ui/FormFooter";
import { Link } from "react-router-dom";
import Input from "../../components/ui/Input";
import { useForm } from "react-hook-form";
import { object, string, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = object({
  email: string().min(1, "Email is required").email("Not a valid email"),
  password: string().min(1, "Password is required"),
});

type LoginInput = TypeOf<typeof loginSchema>;

export default function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  function onSubmit(values: LoginInput) {
    console.log(values);
  }

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center my-4">
      <SectionHeading>Login to your account</SectionHeading>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg my-3 bg-black flex flex-col gap-3 rounded-md p-4"
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
        <FormGroup>
          <InputLabel forAttr="password">password</InputLabel>
          <Input
            type="password"
            id="password"
            placeholder="********"
            options={register("password")}
          />
          <p className="text-rose-600 text-sm" aria-live="assertive">
            {errors.password?.message}
          </p>
        </FormGroup>
        <button
          type="submit"
          className="px-2 py-3 bg-polar-green-500 text-white font-bold rounded-lg hover:opacity-80 focus:ring-2 focus:ring-white"
        >
          Login
        </button>

        <FormFooter>
          <p className="flex items-center gap-2 text-sm">
            Forgot password?
            <Link
              to="/auth/reset-password"
              className="underline text-center text-polar-green-500"
            >
              Reset Password
            </Link>
          </p>
        </FormFooter>
      </form>
    </div>
  );
}
