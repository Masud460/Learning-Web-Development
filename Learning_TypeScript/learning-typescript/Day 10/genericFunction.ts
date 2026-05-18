interface ApiResponse<T> {
    data: T;
    status: string;
    message: string;
}

const user1: ApiResponse<string> = {
    data: 'You are correct',
    status: 'pending',
    message: 'res is traversing...',
}

const user2: ApiResponse<number[]> = {
  data: [1, 2, 3, 4],
  status: "pending",
  message: "res is finally ready to complete.",
};

// console.log(user2);


/// Constrained Generic

function logMessage<T extends { message: string }>(arg: T): string {
    return arg.message;
}

console.log(logMessage(user2));


// I've not understood this example, where the length property come from?

function logLen<T extends { length: number }>(arg: T): void {
console.log(arg.length);
}
// logLen('hello'); // 
// logLen(42); // 