let userInput: string | number = 'etc'

let apiRequestStatus: 'pending' | 'success' | 'failed' = 'pending'
apiRequestStatus = 'success'

let orders = ["12", "18", "20"]
let currentOrder: string | undefined;
for (let order of orders) {
    if(order === "18"){

        currentOrder = order
        break
    }
}

// currentOrder = 97;

console.log(currentOrder);