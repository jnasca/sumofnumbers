/**
 * Sum of Numbers
 * Created by Joseph on 9/18/2016.
 */

function sumFor(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i += 1) {
    sum += list[i];
  }
  return sum;
}

function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i];
    i += 1;
  }
  return sum;
}

function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sumRecursion(list.slice(1, list.length));
}

function sumTheSimpleWay(list) {
  return _.reduce(list, function reduce(memo, num) { return memo + num; }, 0);
}

const list = [1, 2, 3, 4, 5];
console.log(sumFor(list));
console.log(sumWhile(list));
console.log(sumRecursion(list));
console.log(sumTheSimpleWay(list));
