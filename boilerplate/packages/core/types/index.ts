export enum SizeTypes {
  "REGULAR" = "regular",
  "SMALL" = "small",
  "MEDIUM" = "medium",
  "LARGE" = "large",
}

export enum StyleTypes {
  "DEFAULT" = "default",
  "DARK" = "dark",
  "LIGHT" = "light",
}

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