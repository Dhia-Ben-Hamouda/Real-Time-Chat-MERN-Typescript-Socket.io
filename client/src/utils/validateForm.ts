// function to validate form fields before submission

import type { AuthForm } from "../@types/types";

export default function validateForm(authForm: AuthForm, type: string) {
    const errors = { name: "", phone: "", password: "", email: "" };

    if (type === "signUp") {

    }

    if (!errors.email) {

    }

    if (!errors.password) {

    }

    return errors;
}