export interface MenuItem {
  name: string;
  desc: string;
  ingredients?: string[];
  price: number;
  id: number;
}

export interface CartItem {
  info: MenuItem[];
  totalPrice: number;
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
}

export interface ResponseBody {
  success: boolean;
  message: string;
  body?: object | string;
  userInfo?: object;
}

export interface UserType {
  username: string;
  password: string;
  userID?: string;
  staff?: boolean;
}
