export type ProviderProps = {
    children: React.ReactNode
}

export type User = {
    name: string,
    phone: number,
    email: string,
    password: string,
    id: string,
    picture: string
}

export type AuthState = {
    accessToken: string | null,
    user: User | null
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