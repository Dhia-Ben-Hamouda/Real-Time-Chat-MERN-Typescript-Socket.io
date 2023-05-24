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