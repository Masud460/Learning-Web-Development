interface User {
  name: string;
  age: number;
  id: number;
  email: string;
  password: string;
  isLoggedIn: boolean;
  address: string;
  isAdult: boolean;
  isPremium: boolean;
}

const updateUser: Partial<User> = {
  name: "Masud",
};

type PublicUser = Omit<
  User,
  "isLoggedIn" | "address" | "isAdult" | "isPremium"
>;

type PreviewUser = Pick<User, "name" | "age" | "email">;

// Claude task
interface Product {
  name: string;
  id: number;
  price: number;
  description: string;
}

const product: Product = {
  name: "Fan",
  id: 34,
  price: 99,
  description: "This is most valueable product.",
};

function updateProduct<T>(
  product: Partial<Product>,
  key: keyof Product,
  to: T,
) {
  return (product[key] = to); // Why the problem accuares? I know a solution with any keyword in 'to';
}

updateProduct<string>(product, "name", "Phone");
// console.log(product);

const roProduct: Readonly<Product> = {
  name: "Fan",
  id: 34,
  price: 99,
  description: "This is most valueable product.",
};

roProduct.id = 937;

type OptProduct = {
  name?: string;
  id?: number;
  price?: number;
  description?: string;
};

const requiredProduct: Required<OptProduct> = {
  name: "Fan",
  id: 34,
  price: 99,
  description: "This is most valueable product.",
};
