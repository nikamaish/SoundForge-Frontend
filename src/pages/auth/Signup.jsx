import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

import {
  CommonInput,
  CommonPassword,
  CommonButton,
} from "../../common/CommonComponents";

import { signupSchema } from "./authSchema";
import api from "../../services/api";

export default function Signup() {
  const [serverError, setServerError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }, //destructuring formState to get errors and isSubmitting
  } = useForm({
    resolver: yupResolver(signupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (formData) => {
    setServerError("");
    setSuccessMessage("");

    try {
      const response = await api.post("/auth/register", formData);
      setSuccessMessage(response.data?.message || "Registration successful!");
        reset();
    } catch (error) {
      setServerError(
        error.response?.data?.message ||
        "Registration failed. Please try again.",
      );
    }
  };

  return (
    <div className="auth-page">
      <form className="auth-form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <h1>Create your account</h1>
        <p>Join SoundForge and find your sound.</p>

        <CommonInput
          name="firstName"
          control={control}
          label="First Name"
          placeholder="Enter your first name"
          errors={errors}
        />

        <CommonInput
          name="lastName"
          control={control}
          label="Last Name"
          placeholder="Enter your last name"
          errors={errors}
        />

        <CommonInput
          name="email"
          control={control}
          label="Email"
          placeholder="Enter your email"
          errors={errors}
        />

        <CommonPassword
          name="password"
          control={control}
          label="Password"
          placeholder="Create a password"
          errors={errors}
        />

        {serverError && (
          <p className="common-error" role="alert">
            {serverError}
          </p>
        )}

        {successMessage && <p role="status">{successMessage}</p>}

        <CommonButton
          label="Create Account"
          type="submit"
          loading={isSubmitting}
          disabled={isSubmitting}
        />
      </form>
    </div>
  );
}
