export interface MenuItem {
    name: string,
    id: number,
    desc: string,
    ingredients: string[],
    price: number
}

export interface User {
    name: string,
    password: string
}