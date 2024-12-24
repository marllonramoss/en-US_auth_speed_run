import React from "react";
import CustomInput from "./CustomInput";
import CustomButton from "../shared/CustomButton";

const RecoveryForm = () => {
  return (
    <div className="w-[631px] h-[339px] bg-[#18181B] rounded-lg px-16 py-12 flex flex-col items-center justify-center">
      <span className="w-full  text-xl font-bold mb-6 flex justify-center items-center">
        Email to recovery password
      </span>
      <div className="w-full ">
        <CustomInput label="Email" typeOfForm="iconEnd" type="email" />
        <CustomButton className="mt-6">Send</CustomButton>
      </div>
    </div>
  );
};

export default RecoveryForm;
