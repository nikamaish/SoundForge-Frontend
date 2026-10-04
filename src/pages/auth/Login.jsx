import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

import {
    CommonInput,
    CommonPassword,
    CommonButton,
} from "../../common/CommonComponents";

import { loginSchema } from "./authSchema";
import api from "../../services/api";

export default function Login() {
    const [serverError, setServerError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: yupResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (formData) => {
        setServerError("");
        setSuccessMessage("");

        try {
            const response = await api.post("/auth/login", formData);
            setSuccessMessage(response.data?.message || "Login successful!");
              reset();
        } catch (error) {
            setServerError(
                error.response?.data?.message ||
                "Login failed. Please try again.",
            );
        }
    };

    return (
        <div className="auth-page">
            <form className="auth-form" onSubmit={handleSubmit(onSubmit)} noValidate>
                <h1>Login to your account</h1>
                <p>Sign in to continue to SoundForge.</p>

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
                    placeholder="Enter your password"
                    errors={errors}
                />

                {serverError && (
                    <p className="common-error" role="alert">
                        {serverError}
                    </p>
                )}

                {successMessage && <p role="status">{successMessage}</p>}

                <CommonButton
                    label="Sign In"
                    type="submit"
                    loading={isSubmitting}
                    disabled={isSubmitting}
                />
            </form>
        </div>
    );
}
