// function to validate form fields before submission

import type { AuthForm } from "../@types/types";

export default function validateForm(authForm: AuthForm, type: string) {
    const errors = { name: "", phone: "", password: "", email: "" };

    if (type === "signUp") {
        if (!authForm.name) {
            errors.name = "name field is required";
        }

        if (!authForm.phone) {
            errors.phone = "phone field is required";
        } else if (!/^[\d]{8}$/.test(authForm.phone)){
            errors.phone = "phone should be composed of numbers";
        }
    }

    if (!authForm.email) {
        errors.email = "email field is required";
    }else if ( !/^[a-zA-Z0-9\.]{3,}@[a-zA-Z0-9]{3,}\.[a-zA-Z0-9]{2,}$/.test(authForm.email)){
        errors.email = "please enter a valid email adress";
    }

    if (!authForm.password) {
        errors.password = "password field is required";
    }

    return errors;
}