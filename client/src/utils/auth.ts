import { NavigateFunction } from "react-router-dom";
import url from "../api/baseURL";
import type { AuthForm } from "../@types/types";

export async function resetPassword(email: string) {
    const response = await fetch(`${url}/auth/resetPassword`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            email
        })
    });
    const data = await response.json();

    switch (data.msg) {

    }
}

export async function signIn(authForm: AuthForm, button: HTMLButtonElement, navigate: NavigateFunction, dispatch: React.Dispatch<any>) {
    const response = await fetch(`${url}/auth/signIn`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            email: authForm.email,
            password: authForm.password
        })
    });
    const data = await response.json();

    switch (data.msg) {

    }
}

export async function signUp(authForm: AuthForm, button: HTMLButtonElement) {
    const response = await fetch(`${url}/auth/signUp`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(authForm)
    });
    const data = await response.json();

    switch (data.msg) {

    }
}