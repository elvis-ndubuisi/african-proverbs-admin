import { SectionHeading } from "../../components/ui/Typography";
import FormGroup from "../../components/ui/FormGroup";
import InputLabel from "../../components/ui/InputLabel";
import FormFooter from "../../components/ui/FormFooter";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { object, string, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../components/ui/Input";

const registerSchema = object({
  email: string().min(1, "Email is required").email("Not a valid email"),
  username: string().min(1, "Username is required"),
  password: string().min(1, "Password is required"),
  confirmPassword: string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type RegisterInput = TypeOf<typeof registerSchema>;

export default function Register() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  function onSubmit(values: RegisterInput) {
    console.log(values);
  }
  console.log(errors);

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center my-4">
      <SectionHeading>Create an account</SectionHeading>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg my-3 bg-black flex flex-col gap-3 rounded-md p-4"
      >
        <FormGroup>
          <InputLabel forAttr="username">Username</InputLabel>
          <Input
            type="text"
            id="username"
            placeholder={"your name"}
            options={register("username")}
          />

          <span className="text-xs text-red-500" aria-live="assertive">
            {errors.username?.message}
          </span>
        </FormGroup>
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
        <FormGroup>
          <InputLabel forAttr="confirmPassword">Comfirm Password</InputLabel>
          <Input
            type="password"
            id="confirmPassword"
            placeholder="********"
            options={register("confirmPassword")}
          />
          <p className="text-rose-600 text-sm" aria-live="assertive">
            {errors.confirmPassword?.message}
          </p>
        </FormGroup>
        <button
          type="submit"
          className="px-2 py-3 bg-polar-green-500 text-white font-bold rounded-lg hover:opacity-80 focus:ring-2 focus:ring-white"
        >
          Submit
        </button>

        <FormFooter>
          <p className="flex items-center gap-2 text-sm">
            Already an Admin?
            <Link
              to="/auth/login"
              className="underline text-center text-polar-green-500"
            >
              Login to account
            </Link>
          </p>
        </FormFooter>
      </form>
    </div>
  );
}
