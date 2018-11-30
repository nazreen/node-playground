const {  performance } = require('perf_hooks')
const assert = require('assert')

function factorialByLoop (num) {
  let total = 1
  for(i = 1; i <= num; i ++) {
    total = total * i
  }
  return total
}

function factorialByRecursion (num) {
  if (num < 0) return;
  if (num === 0) return 1;
  return num * factorialByRecursion(num - 1)
}

const input = 5
const expected = 120

const t01start = performance.now()
assert.strictEqual(factorialByLoop(input), expected)
const t01end = performance.now()
const loopTimeTaken = t01end - t01start
console.log(`factorialByForLoop: ${loopTimeTaken} ms`)

const t02start = performance.now()
assert.strictEqual(factorialByRecursion(input), expected)
const t02end = performance.now()
const recursionTimeTaken = t02end - t02start
console.log(`factorialByRecursion: ${recursionTimeTaken} ms`)

const loopToRecursion = Math.round(loopTimeTaken/recursionTimeTaken * 100) / 100 
console.log(`Finding a factorial by recursion is ${loopToRecursion} times faster than for loop.`)