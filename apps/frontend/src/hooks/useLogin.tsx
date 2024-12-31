import axios from "axios";
import React from "react";

const useLogin = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>("");
  const [success, setSuccess] = React.useState<boolean>(false);

  const loginUser = async (credentials: {
    email: string;
    password: string;
  }) => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error("Failed to login user");
      }

      const result = await response.json();
      setSuccess(true);

      return result;
    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, success, loginUser };
};

export default useLogin;
