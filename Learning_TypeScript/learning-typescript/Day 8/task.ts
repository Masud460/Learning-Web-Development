function printValue(val: string | number | boolean): void {
    if (typeof val === 'string') {
        console.log(val.toLowerCase());
        return;
    }
    if (typeof val === 'number') {
        console.log(val.toExponential());
        return;
    }
    console.log(val ? 'True Boolean' : 'False Boolean');
}
printValue("Masud")