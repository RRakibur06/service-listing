"use client";

import { useRouter } from "next/navigation";

import Cookies from "js-cookie";
import Image from "next/image";

import { useForm } from "react-hook-form";
 import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Page() {
  const form = useForm();
  const router = useRouter();

  const onSubmit = async () => {
    Cookies.set("loggedIn", true);
    router.push("/dashboard");
  };

  return (
    <div className="text-black h-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
        <div className="hidden sm:block">
          <div className="bg-[#CCCCCC] h-full flex justify-center items-center">
            <Image
              src="/images/logingraphic.png"
              height={313}
              width={508}
              alt="Login_graphic"
              className="h-auto w-auto"
            />
          </div>
        </div>
        <div className="bg-[#FFFFFF] h-full flex justify-center items-center">
          <div className="  flex flex-col items-center">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo-withoutbg.png"
                height={65}
                width={55}
                alt="Logo"
                className="h-auto w-auto"
              />
              <h1 className="text-2xl font-bold">Sign In</h1>
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-[320px] sm:w-[300px] lg:w-[420px] space-y-4"
              >
                <FormField
                  className="rounded-lg "
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username/ Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="type..."
                          {...field}
                          className="border border-slate-300 hover:border-sky-700 rounded-[10px] placeholder:text-slate-300"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="type..."
                          {...field}
                          className=" border border-slate-300 hover:border-sky-700 rounded-[10px] placeholder:text-slate-300"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="bg-[#6C63FF] hover:bg-sky-700 w-full  text-white rounded-[10px]"
                >
                  Login
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
