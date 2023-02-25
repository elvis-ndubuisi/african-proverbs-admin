import { SectionHeading } from "../../components/ui/Typography";
import FormGroup from "../../components/ui/FormGroup";
import InputLabel from "../../components/ui/InputLabel";
import FormFooter from "../../components/ui/FormFooter";
import { Link } from "react-router-dom";
import Input from "../../components/ui/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import loginSchema, { LoginInput } from "../../schemas/login.schema";
import React from "react";
import { loginAdmin } from "../../services/auth.service";
import { useNavigate } from "react-router-dom";

type CustomRes = {
  server: string;
  desc?: string;
};

export default function Login() {
  const navigate = useNavigate();
  const [waiting, setWaiting] = React.useState<boolean>(false);
  const [hasError, setHasError] = React.useState<boolean>(false);
  const [errData, setErrData] = React.useState<CustomRes>({ server: "" });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(values: LoginInput) {
    setWaiting(true);
    await loginAdmin(values)
      .then((response) => {
        /**
         * An object with accessToken, and refreshToke field is return;
         * Cookie params are access-token & refresh-token
         */
        navigate("/dashboard");
      })
      .catch((error) => {
        setHasError(true);
        if (
          error?.response?.status === 403 ||
          error?.response?.status === 401
        ) {
          // 403 forbidden - verify account.
          // 401 unauthorized - invalid email or password.
          setErrData({
            server: error?.response?.data,
          });
          return;
        }
        setErrData({
          server: "An error occured",
        });
      });
    setWaiting(false);
  }

  React.useEffect(() => {
    let timer: any;
    if (hasError) {
      timer = setTimeout(() => {
        setHasError(false);
        setErrData({ server: "", desc: "" });
      }, 4000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [hasError]);

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center my-4">
      <SectionHeading>Login to your account</SectionHeading>

      {hasError && <Response customRes={errData} />}

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
          disabled={waiting}
        >
          {waiting ? "Submitting...." : "Login"}
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

function Response({ customRes }: { customRes: CustomRes }): JSX.Element {
  return (
    <div className="border-2 border-polar-green-500 bg-polar-green-100 rounded-md px-3 py-1 mt-3 max-w-lg text-center">
      <p className="font-base mb-1">{customRes.server}</p>
      {customRes.desc && <p>{customRes.desc}</p>}
    </div>
  );
}
