type IsArray<T> = T extends any[] ? "Yes" : "No";
type Flatten<T> = T extends [] ? keyof T : T;

type Orray = IsArray<['Hello']>
type Flote = Flatten<string>


/// Claude task
type Optional<T> = {
    [K in keyof T]?: T[K]
}

type IsArray<T> = T extends any[] ? "array" : "not array";

const test: IsArray<string[]> = [""]
const test: IsArray<number> = [45]
const test: IsArray<boolean> = true