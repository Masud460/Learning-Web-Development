# Day 2

## Today I've learned these things.

- Type Annotation. Dedicated types defining
- The Annotation cannot be reassined with another data-type.

# Day 3

## Today I've learned these things.

- Array in TS
- Tuple
- enum

- We declare array in TS like this:

```ts
const fruit: string[] = ["Apple", "Banana"];
```

Here we can only define string valued array.

- So if we want to define defferent data-type of array, we can use the "Tuple" like this:

```ts
const userDetails: [string, number] = ["Masud", 20];
```

Here if we don't put the element in the same index, it will throw an error.

- And when we need some certain value in a variable that won't be changed but used most of the time, that time we use the 'enum' for avoiding typo or this type of mistakes like this:

```ts
enum UserAge {
  ataullah = 20,
  sayed = 22,
  kamrul = 20,
}
const kamrulAge: UserAge = UserAge.kamrul;
```

Try to use the rule for enum (There’s no strict rule enforced by TypeScript):
enum name: PascalCase,
enum member name: PascalCase,
string: "UPPER_CASE"

- Important: If we don't assign values to enum members, TypeScript will automatically assign numeric values starting from 0 and incrementing by 1. If you assign a value to one member, the rest continue from there. But once you use string enums, TypeScript cannot auto-increment anymore.

# Day 4

## Today I've learned these things.

- Writing objects in TS syntax
- Type Alias
- Interface

- In TS we can define every property's value of an object separatly, like this:

```ts
const user: { name: string; age: number; email: string } = {
  name: "Masud",
  age: 20,
  email: "ataullahmasud388@gmail.com",
};
```

- But what if we have thousends of objects? that time it's not going to be simple, so we use the Type Alias to avoid the problem like this:

```ts
// Type Alias (solution of rewriting types in every object)
type User = {
  name: string;
  age: number;
  email: string;
};

const masud: User = {
  name: "Masud",
  age: 20,
  email: "ataullahmasud388@gmail.com",
};

const mahfuj: User = {
  name: "Mahfuj",
  age: 18,
  email: "saifullahmahfuj110@gamil.com",
};
```

- Interface works similerly like this:

```ts
// Interface (Key similer with Type Alias)
interface Product {
  model: string;
  price: number;
  inStock: boolean;
}

const laptop: Product = {
  model: "Mac book air",
  price: 799.99,
  inStock: true,
};

const mobile: Product = {
  model: "IPhone 17 Pro Max",
  price: 1199.99,
  inStock: false,
};
```

- Rule: We use semicolon in interface and type alias instead of comma

- Key Diffrents of Interface with Type Alias

| Subject                   | Type Alias              | Interface      |
| ------------------------- | ----------------------- | -------------- |
| describing object         | true                    | true           |
| Extendable                | with "&"                | with "extends" |
| Usable in Primitive types | true (type ID = string) | false          |
| Implementetion in class   | false                   | true           |
| Use same name             | Throws error            | Merges         |

- Use optional property if it dosen't mandatory like this:

```ts
type User = {
  name: string;
  age: number;
  email?: string; // Optional
};

const masud: User = {
  name: "Masud",
  age: 20,
  email: "ataullahmasud388@gmail.com",
};

const mahfuj: User = {
  name: "Mahfuj",
  age: 18,
};
```

- We can extends interface with another one like this:

```ts
// Extending Interface
interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  berk: boolean;
}

const pluto: Animal = {
  name: "Pluto",
  age: 1,
};

const miyoko: Dog = {
  name: "Miyoko",
  age: 1,
  berk: true,
}; // Extending Interface
interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  berk: boolean;
}

const pluto: Animal = {
  name: "Pluto",
  age: 1,
};

const miyoko: Dog = {
  name: "Miyoko",
  age: 1,
  berk: true,
};
```

- We can also extend Type Alias with another one like this:

```ts
// Extending Type Alias
type Student = {
  name: string;
  age: number;
  grade: number;
};

type ScholarshipStudent = {
  scholarshipAmount: number;
} & Student;

const ataullah: Student = {
  name: "Ataullah",
  age: 20,
  grade: 30,
};

const rokeya: ScholarshipStudent = {
  name: "Rokeya",
  age: 31,
  grade: 60,
  scholarshipAmount: 25000,
};
```


# Day 5

## Today I've learned this thing.

- Function Typing
- Setting 'void' as return type
- Using Optional Parameter in function
- Using Default Parameter in function

- Arrow Function Typing


- If there no return statment in function, set the return type to 'void';
- The Optional Parameter in function must be in the last of required parameters;
- We cannot use Default parameter in optional parameter;


# Day 6

## Today I've learned these things...

- Union(or/ | )
- Intersection(and/ & )


- If we use union, typescript doesn't allow us to use method directly rather then checking the type firstly.

# Day 7

## Today I've done the mini project...
- Student Result Generator


# Day 8

## Today I've learned these things...

- typeof Narrowing
- instanceof Narrowing
- Truthiness Narrowing
- "in" Operator Narrowing


! Important: if we don't 'return' early in this codebase TS will throw type error:
```ts
function checkPerson(person: Student | number) {
  if (person instanceof Student) {
    console.log(person.tellAboutSelf());
    return // Here is the main game changer
  }
  console.log(person * 3);
}
```


# Day 9

## Today I've learned these things...

- Generics
- A generic lets us write code that works with any type, while still keeping full type safety.
- We can use default generic like the default parameter in function.

- When we call a generic function:
```ts
identity<string>("hello");
// TypeScript replaces T with string.

// Often, TS can infer it automatically:
identity("hello"); // T is inferred as string
```

- T is just a convention — You can write "Type" or "Item" also.
- We can write T[] or Array<T> for array generic
- We can use multiple generics like this:
```ts
function pair<K, V>(key: K, value: V): [K, V] {
  return [key, value];
}

const result = pair("age", 25); // [string, number]
```

- Constraint in generic

<T> is a generic type (a placeholder for any type).
"extends" is used to add a constraint (rule) to the generic type.

```ts
function getLength<T extends { length: number }>(data: T): number{
  return data.length;
} 
```
it means:
→ T can be any type, but it must have a length property.
This is not inheritance, just a requirement for the type.

- Think the 'extends { length: number }' like this:

```ts
const masud388: Student = {
    name: 'Ataullah Masud',
    age: 20,
    id: '_masud388',
}

const products: string[] = ['apple', 'lemon', 'orange'];

console.log(masud388.name);
console.log(products.length); // This is like the object property, can be accessed with dots.
```