"use client";

import React from "react";
import CustomInput from "./CustomInput";
import CustomButton from "../shared/CustomButton";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRegister } from "@/hooks/useRegister";

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  tell: string;
}

const RegisterForm = () => {
  const [hiddenPassword, setHiddenPassword] = React.useState<boolean>(true);
  const { registerUser } = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>(); // Adicionando o tipo genérico aqui

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const result = await registerUser(data);
      console.log("User registered:", result);
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  const handleHiddenPassword = () => {
    setHiddenPassword(!hiddenPassword);
  };

  return (
    <div className="w-[631px] h-fit bg-[#18181B] rounded-md flex flex-col px-16 py-14 justify-center">
      <span className="w-full text-xl font-bold flex justify-center items-center mb-2">
        Sign-up
      </span>

      <div className="flex flex-col gap-5">
        <CustomInput
          typeOfForm="iconStart"
          label="Name"
          type="text"
          className={` ${errors?.name && "input-error"}`}
          {...register("name", { required: "Name is required" })}
          error={errors.name?.message}
        />

        <CustomInput
          typeOfForm="iconStart"
          label="Email"
          type="email"
          className={` ${errors?.email && "input-error"}`}
          {...register("email", { required: "Email is required" })}
          error={errors.email?.message}
        />

        <CustomInput
          typeOfForm="iconStart"
          label="Password"
          type="password"
          hiddenPassword={hiddenPassword}
          setHiddenPassword={handleHiddenPassword}
          className={` ${errors?.password && "input-error"}`}
          {...register("password", { required: "Password is required" })}
          error={errors.password?.message}
        />

        <CustomInput
          typeOfForm="iconStart"
          label="Confirm Password"
          type="password"
          className={` ${errors?.confirmPassword && "input-error"}`}
          {...register("confirmPassword", {
            required: "Confirm password is required",
          })}
          error={errors.confirmPassword?.message}
        />

        <CustomInput
          typeOfForm="iconStart"
          label="Tell"
          type="tel"
          className={` ${errors?.tell && "input-error"}`}
          {...register("tell", { required: "Tell is required" })}
          error={errors.tell?.message}
        />
      </div>
      <div className="mt-12 flex flex-col gap-8 justify-center items-center">
        <CustomButton onClick={handleSubmit(onSubmit)}>
          Create Account
        </CustomButton>
        <div className="flex gap-1">
          <span>Already have an account? </span>
          <Link href={"/login"} className="text-[#22C55E]">
            Sign-in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
