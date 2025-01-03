"use client";
import React from "react";
import CustomInput from "./CustomInput";
import CustomButton from "../shared/CustomButton";
import { useForm } from "react-hook-form";

const RecoveryForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {};

  return (
    <div className="w-[631px] h-[339px] bg-[#18181B] rounded-lg px-16 py-12 flex flex-col items-center justify-center">
      <span className="w-full  text-xl font-bold mb-6 flex justify-center items-center">
        Email to recovery password
      </span>
      <div className="w-full ">
        <CustomInput
          label="Email"
          typeOfForm="iconEnd"
          type="email"
          {...register("email", { required: "Email is required" })}
        />
        <CustomButton className="mt-6" onClick={handleSubmit(onSubmit)}>
          Send
        </CustomButton>
      </div>
    </div>
  );
};

export default RecoveryForm;
