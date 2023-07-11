# Remix x

```js
const checkLeapYear = (year) => {
    return (
        (year % 4 === 0 && year % 100 !== 0) ||
        (year % 4 === 0 && year % 400 === 0)
    );
};

```

## Strategy
to check whether a given year is a leap year or not


## Implementation

The code defines a function checkLeapYear that takes a year as input and returns 
true if it is a leap year,
 and false otherwise. The implementation uses logical conditions to check the 
 divisibility of the year by 4, 100, and 400.

## Possible Refactors

You can use `if` `else` 
## References
