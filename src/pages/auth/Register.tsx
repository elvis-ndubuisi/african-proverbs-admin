import { SectionHeading } from "../../components/ui/Typography";
import FormGroup from "../../components/ui/FormGroup";
import InputLabel from "../../components/ui/InputLabel";
import FormFooter from "../../components/ui/FormFooter";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import registerSchema, { RegisterInput } from "../../schemas/register.schema";
import React from "react";
import Input from "../../components/ui/Input";
import { registerAdmin } from "../../services/auth.service";

export default function Register() {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [registerError, setRegisterError] = React.useState(null);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  function onSubmit(values: RegisterInput) {
    setLoading(true);
    registerAdmin(values)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        if (error?.response?.status === 409) {
          console.log(error?.response?.data);
          return;
        }
        console.log("Internal error");
      });
    setLoading(false);
  }

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center my-4">
      <SectionHeading>Create an account</SectionHeading>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg my-3 bg-gray-200 flex flex-col gap-3 rounded-md p-4"
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
          className="px-2 py-3 bg-polar-green-500 text-white font-bold rounded-lg hover:opacity-80 focus:ring-2 focus:ring-white disabled:cursor-not-allowed"
          disabled={loading}
        >
          {loading ? "Loading...." : "Submit"}
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
