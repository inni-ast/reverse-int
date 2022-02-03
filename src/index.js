module.exports = function reverse(n) {
    const string = String(Math.abs(n));
    return Number(string.split("").reverse().join(''));
}
