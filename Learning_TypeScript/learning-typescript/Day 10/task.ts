interface RealApiResponse<T> {
    user: string;
    product: T;
}


const masud: RealApiResponse<string> = {
    user: 'Masud',
    product: 'MacBook',
}
