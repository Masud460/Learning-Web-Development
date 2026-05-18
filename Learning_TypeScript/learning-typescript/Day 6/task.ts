function printId(id: string | number): void {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    } else {
        console.log(id * 2);
    }
}


type BasicUser = {
    name: string;
    email: string;
}
type AdminUser = {
    adminLevel: number;
    permissions: string[];
}

type SuperAdmin = BasicUser & AdminUser;

const masud: SuperAdmin = {
    name: 'Masud',
    email: 'ataullahmasud388@gmail.com',
    adminLevel: 2,
    permissions: ['dashboard', 'database', 'hosting']
}