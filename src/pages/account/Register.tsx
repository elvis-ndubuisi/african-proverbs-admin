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

type CustomRes = {
  server: string;
  desc?: string;
};

export default function Register() {
  const [waiting, setWaiting] = React.useState<boolean>(false);
  const [resView, setResView] = React.useState<boolean>(false);
  const [resData, setResData] = React.useState<CustomRes>({ server: "" });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  async function onSubmit(values: RegisterInput) {
    setWaiting(true);
    await registerAdmin(values)
      .then(async (response) => {
        const resp = await response.data;
        setResData({
          server: resp,
          desc: `An verification link was sent to your ${values.email}`,
        });
        setResView(true);
      })
      .catch((error) => {
        if (error?.response?.status === 409) {
          setResData({
            server: error?.response?.data,
            desc: "Please proceed to login",
          });
          setResView(true);
          return;
        }
        setResData({ server: "An Error Occured" });
      });
    setWaiting(false);
  }

  React.useEffect(() => {
    let timer: any;
    if (resView) {
      timer = setTimeout(() => {
        setResView(false);
        setResData({ server: "", desc: "" });
      }, 5000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [resView]);

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center my-4">
      <SectionHeading>Create an account</SectionHeading>

      {resView && <Response viewRes={resData} />}

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
          disabled={waiting}
        >
          {waiting ? "Loading...." : "Submit"}
        </button>

        <FormFooter>
          <p className="flex items-center gap-2 text-sm">
            Already an Admin?
            <Link
              to="/account/login"
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

function Response({ viewRes }: { viewRes: CustomRes }): JSX.Element {
  return (
    <div className="border-2 border-polar-green-500 bg-polar-green-100 rounded-md px-3 py-1 mt-3 max-w-lg">
      <p className="font-medium">{viewRes.server}</p>
      {viewRes.desc && <p className="text-base">{viewRes.desc}</p>}
    </div>
  );
}
