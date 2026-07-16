type IdResult<T> = T extends string ? { id: string } : { id: number };

function getId<T extends string | number>(id: T): IdResult<T>{
    return { id } as IdResult<T>;
}

const test = getId<string>('masud');
console.log(test);