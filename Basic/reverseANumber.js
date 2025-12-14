var reverse = function(x) {
    let sign = x < 0 ? -1 : 1;
    x = Math.abs(x);

    let newNum = 0;

    while (x > 0) {
        let lastDigit = x % 10;
        newNum = newNum * 10 + lastDigit;
        x = Math.floor(x / 10);
    }

    newNum *= sign;

    // 🔴 32-bit overflow check
    // Math.pow(2,31)
    if (newNum < -(2 ** 31) || newNum > (2 ** 31 - 1)) {
        return 0;
    }

    return newNum;
};
