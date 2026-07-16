/// types.ts
type User = Record<"name" | "email" | "password", string>;

interface Product {
    name: string;
    productId: number;
    price: number;
}

export type { User, Product }

/// main.ts
import { User, Product } from "types.ts";

const user: User = {
    name: 'Masud',
    email: 'masud@gmail.com',
    password: '3457jdflkj',
}

const product: Product = {
    name: "Fan",
    productId: 45,
    price: 99,
}