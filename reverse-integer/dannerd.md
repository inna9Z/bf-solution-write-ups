# [Samir](https://www.codewars.com/users/Dannerd)

```js
   export const reverseInt = (x) => {
   const sign = Math.sign(x);
   const reversed = parseInt(
      String(Math.abs(x).split('').reverse().join('')),10
   );
   return sign * reversed;
}
```

## Strategy

Given a signed 32-bit integer x, return x with its digits reversed. 
If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], 
then return 0.

## Implementation



**Arrow function - implicit return**: Dannerd's solution is a single expression
so he didn't need a `return` statement.

**Array literal (hard-coded values)**: He hard-coded all the right answers (in
order) into an array.

**Array access by index**: Since the parameter is a number, Dan used it as an
index to access the correct answer in the array.

## Possible Refactors

This strategy could also be implemented with these Implementation ...

- a long `if else if else` statement
- a long `switch case`,
- an object with key/value pairs to represent the possible correct answers

## References

This solution was interesting because of how Dannerd used JS, the only new that
confused me for a minute was the implicit return:

- implicit returns:
  [kbarker.dev](https://kbarker.dev/blog/implicit-return-statements-in-javascript/)
