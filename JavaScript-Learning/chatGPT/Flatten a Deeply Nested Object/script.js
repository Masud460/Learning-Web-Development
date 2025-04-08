function flattenObject(obj, prefix = "") {
    let result = {};
    
    for (let key in obj) {
        let newKey = prefix ? `${prefix}.${key}` : key;
        if (typeof obj[key] === "object" && obj[key] !== null) {
            Object.assign(result, flattenObject(obj[key], newKey));
        } else {
            result[newKey] = obj[key];
        }
    }
    
    return result;
}

// Example Usage:
const obj = { a: { b: { c: 1 } }, d: 2 };
console.log(flattenObject(obj));
// Output: { "a.b.c": 1, "d": 2 }
