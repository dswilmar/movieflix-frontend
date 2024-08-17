export type Movie = {
    id: number
    title: string
    poster_path: string
    overview?: string
}

export type User = {
    id: string
    name: string
    email: string
    token: string
}