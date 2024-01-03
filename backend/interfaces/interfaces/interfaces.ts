interface MenuItem {
    name: string,
    desc: string,
    ingredients: Array<string>,
    price: number
}

interface User {
    name: string,
    password: string
}

export { MenuItem, User };