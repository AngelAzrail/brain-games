export const randomize = (min, max) => Math.floor(min + Math.random() * max);

export const operators = ['+', '-', '*', '/'];

export const expression = (op, num1, num2) => {
  switch (op) {
    case '+': {
      return num1 + num2;
    }
    case '-': {
      return num1 - num2;
    }
    case '*': {
      return num1 * num2;
    }
    case '/': {
      return num1 / num2;
    }
    default: return null;
  }
};

export const mathGcd = (first, second, result) => (first % result === 0 && second % result === 0
  ? result
  : mathGcd(first, second, result - 1));

export const mathPrime = (num, acc = 2) => {
  if (num < 2) return false;
  if (acc <= num / 2) {
    return num % acc === 0 ? false : mathPrime(num, acc + 1);
  }
  return true;
};

export const mathProgression = (result, acc, el, diff) => {
  if (acc !== 0) {
    const newEl = el + diff;
    result.push(newEl);
    return mathProgression(result, acc - 1, newEl, diff);
  }
  return null;
};
