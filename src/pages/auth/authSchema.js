import * as yup from "yup";

export const signupSchema = yup.object({
    firstName: yup
        .string()
        .trim()
        .required("First name is required"),

    lastName: yup
        .string()
        .trim()
        .required("Last name is required"),

    email: yup
        .string()
        .trim()
        .email("Enter a valid email address")
        .required("Email is required"),

    password: yup
        .string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
});

export const loginSchema = yup.object({
    email: yup
        .string()
        .trim()
        .email("Enter a valid email address")
        .required("Email is required"),

    password: yup
        .string()
        .required("Password is required"),
});
