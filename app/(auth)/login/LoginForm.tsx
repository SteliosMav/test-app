import Button from "@/components/ui/Button";
import TextInput from "@/components/ui/TextInput";
import React from "react";

export default function LoginForm() {
  return (
    <form
      action="/home"
      method="get"
      className={"flex flex-col gap-6 items-center"}
    >
      <TextInput
        type="email"
        id="email"
        name="email"
        placeholder="Email address"
        required
      />
      <TextInput
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        required
      />
      <Button
        type="submit"
        color="primary"
        className="w-full px-4 py-4 text-xl font-bold"
      >
        Log in
      </Button>
    </form>
  );
}