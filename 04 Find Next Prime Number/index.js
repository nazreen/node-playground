const assert = require('assert')

function isDivisible(value,divisor) {
  return value % divisor === 0
}
// TODO: below will trigger Maximum Call Stack Size reached if number is too big
function isPrime(num, a) {
  if (!Number.isInteger(num)) return false
  if (a === 1 || num === 1) return true
  a = a || num - 1
  if (isDivisible(num, a)) {
    return false
  } {
    return isPrime(num, a - 1)
  }  
}

function nextPrime(num) {
  if (!Number.isInteger(num)) {
    const ceiling = Math.ceil(num)
    if (isPrime(ceiling)) return ceiling
  }
  if (isPrime(num + 1)) {
    return num + 1
  } else {
    return nextPrime(num + 1)
  }
}

assert.strictEqual(isDivisible(12,3), true)
assert.strictEqual(isDivisible(12,5), false)

assert.strictEqual(isPrime(11), true)
assert.strictEqual(isPrime(12), false)
assert.strictEqual(isPrime(37), true)
assert.strictEqual(isPrime(12), false)
assert.strictEqual(isPrime(36), false)

assert.strictEqual(nextPrime(11), 13)
assert.strictEqual(nextPrime(41), 43)
assert.strictEqual(nextPrime(23), 29)