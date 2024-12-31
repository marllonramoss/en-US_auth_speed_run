import React from "react";

interface layoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: layoutProps) => {
  return (
    <div className="container flex justify-center items-center h-screen ">
      {children}
    </div>
  );
};

export default layout;
