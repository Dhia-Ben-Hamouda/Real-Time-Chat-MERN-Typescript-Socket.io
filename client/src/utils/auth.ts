import { NavigateFunction } from "react-router-dom";
import url from "../api/baseURL";
import type { AuthForm, User } from "../@types/types";
import toast from "react-hot-toast";
import decode from "jwt-decode";

export async function forgetPassword(email: string) {
    const response = await fetch(`${url}/auth/forgetPassword`, {
        method: "POST",
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

export async function resetPassword(password: string, button: HTMLButtonElement) {
    try {
        const response = await fetch(`${url}/auth/resetPassword`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                password
            })
        });
        const data = await response.json();

        switch (data.msg) {
            case "user with the given id doesn't exist":
                break;
            case "password has been reset successfully":
                break;
            case "error while resetting password":
                break;
        }
    } catch (err) {
        console.error(err);
    }
}

export async function signIn(authForm: AuthForm, button: HTMLButtonElement, navigate: NavigateFunction, dispatch: React.Dispatch<any>) {
    try {
        toast.loading("signing in...", { id: "auth", position: "bottom-center" });
        button.disabled = true;
        await new Promise(r => setTimeout(r, 500));

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
        button.disabled = false;

        console.log(data);

        switch (data.msg) {
            case "user with the given email doesn't exist":
                toast.error(data.msg, { id: "auth" });
                break;
            case "wrong password":
                toast.error(data.msg, { id: "auth" });
                break;
            case "error while signing in":
                toast.error(data.msg, { id: "auth" });
                break;
            case "signed in successfully":
                const accessToken = data.accessToken;
                const user = decode(accessToken) as User;

                console.log("here");

                dispatch({ type: "SIGN_IN", payload: { accessToken, user } });
                toast.success(`welcome back ${user.name}`, { id: "auth" });
                navigate("/home");
                break;
        }
    } catch (err) {
        console.error(err);
    }
}

export async function signUp(authForm: AuthForm, button: HTMLButtonElement) {
    try {
        toast.loading("creating account...", { id: "auth", position: "bottom-center" });
        button.disabled = true;
        await new Promise(r => setTimeout(r, 500));

        const response = await fetch(`${url}/auth/signUp`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(authForm)
        });
        const data = await response.json();
        button.disabled = false;

        switch (data.msg) {
            case "user with the given email already exists":
                toast.error(data.msg, { id: "auth" });
                break;
            case "user created successfully":
                toast.success(data.msg, { id: "auth" });
                break;
            case "error while signing up":
                toast.error(data.msg, { id: "auth" });
                break;
        }
    } catch (err) {
        console.error(err);
    }
}

export async function signOut() {

}