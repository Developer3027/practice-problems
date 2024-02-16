function romanToInteger(string) {
    // create a conversion from roman to integer
    const symbol = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }
    // create the result variable
    let result = 0;
    // loop through the roman string. Eval the pair,
    // if first is less than the second the subtract and store in result
    // else add to result and store new total
    for (let i=0; i<string.length; i++) {
        // create the current variable. The string passed in symbol refers to the object
        // use [string[i]] to locate the correct symbol
        const current = symbol[string[i]];
        const next = symbol[string[i+1]];
        console.log(current, next)
        if (current < next) {
            result += next - current
            i++
        } else {
            result += current
        }
    }
    return result
}
console.log(romanToInteger("IVIV"));
