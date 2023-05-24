export type ProviderProps = {
    children: React.ReactNode
}

export type User = {

}

export type AuthState = {
    accessToken: string,
    user: User
}

export type Action = {
    type: string,
    payload?: any
}

export type AuthForm = {
    name: string,
    phone: string,
    email: string,
    password: string,
    picture: File | null
}