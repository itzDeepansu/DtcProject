"use client";
import Link from "next/link";
import { useState } from "react";
import { CircleLoader } from "react-spinners";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react";

const Login = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setSubmitting(true);
    let res = await signIn("credentials", { ...data,redirect: false });
    if (res.error) {
      setSubmitting(false);
      console.log(res.error);
    } else {
      setSubmitting(false);
      router.push("/");
    }
  };

  if (submitting) {
    return (
      <div className="bg-black flex justify-center items-center h-[100vh] w-[100vw] transition-all duration-1000">
        <CircleLoader color="#ffffff" loading={submitting} size={400} />
      </div>
    );
  }

  return (
    <div className="w-full min-h-[100dvh] flex flex-col-reverse lg:flex-row bg-black text-white justify-center items-center absolute top-0 left-0 z-50">
      <div className="flex items-center justify-center py-12">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto grid w-[350px] gap-6"
        >
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-[#817e7e]">
              Enter your credentials below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="text"
                placeholder="test@gmail.com"
                required
                className="placeholder:text-[#817e7e] rounded-[3px]"
                {...register("email")}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forget-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                required
                className="rounded-[3px]"
                {...register("password")}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-white text-black hover:text-white rounded-[3px]"
            >
              Login
            </Button>
          </div>
        </form>
      </div>
      <div className="w-1/2 h-[12vh] lg:h-[100dvh]">
      <img
              src="data:image/png;base64,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"
              alt="image"
              className="invert -translate-x-3 xl:translate-x-44 h-full w-full object-cover"
            />
      {/* <img src="/next.svg" alt="logo" className=""/> */}
      </div>
    </div>
  );
};

export default Login;