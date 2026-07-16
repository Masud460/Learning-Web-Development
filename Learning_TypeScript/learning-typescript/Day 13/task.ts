type User = {
    name: string;
    id: number;
    available: null;
}

type UnionUser = string | number | null;

type MyReadonly<T> = {
    readonly [K in keyof T]: T[K];    
}

type MyPartial<T> = {
    [K in keyof T]?: T[K];
}

type Nullable<T> = {
    [K in keyof T]: T[K] | null;
}


const readonlyMasud: MyReadonly<User> = {
    name: 'Masud',
    id: 345,
    available: null,
}

// readonlyMasud.id = 868 /// It shows an error

const partialMasud: MyPartial<User> = {
    name: 'Masud',
}

const nullableMasud: Nullable<UnionUser> = null;



/// Claude task
interface Circle {
  radius: number;
}
interface Rectangle {
  width: number;
  height: number;
}
function getArea(shape: Circle | Rectangle): string {
  if ("radius" in shape) {
    return "This is a Circle";
  } else {
    return "This is a Rectangle";
  }
}
