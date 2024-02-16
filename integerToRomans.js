function integerToRomans(number) {
    if (number === 0) {
        return false;
    }
    // create the roman conversion
    const symbol = {
        'M': 1000,
        'D': 500,
        'C': 100,
        'L': 50,
        'X': 10,
        'V': 5,
        'I': 1,
    }
    // loop through number to find the highest decimal value
    // 78 = LXXVIII         // 79 = LXXVIV
    // 78 - 50 = 28 -> L    // 79 - 50 = 29 -> L
    // 28 - 10 = 18 -> X    // 29 - 10 = 19 -> X
    // 18 - 10 = 8  -> X    // 19 - 10 = 9 -> X
    // 8 - 5 = 3    -> V    // 9 - 5 = 4 -> V
    // 3 - 1 = 2    -> I    // 4 - 1 = 3 -> I (this should be IV)
    // 2 - 1 = 1    -> I
    // 1 - 1 = 0    -> I

    let result = []

    // for (let i=0; i<number; i++){
    //     console.log(symbol[i] <= number)
    //     if (symbol[i] <= number) {
    //         number = number - symbol[i];
    //         console.log(i, number);
    //     }
    // }
    for (const num in symbol){
        if (symbol[num]<=number){
            number = number - symbol[num]
            console.log(num, number)
        }
    }
}
console.log(integerToRomans(79))