# Towers Watson Exchange Solutions JavaScript Style Guide

[![Build Status](https://travis-ci.org/TWExchangeSolutions/eslint-config-exchange-solutions.svg?branch=master)](https://travis-ci.org/TWExchangeSolutions/eslint-config-exchange-solutions)

We are extending the [Airbnb](https://github.com/airbnb/javascript) Style Guide, with overrides for
things we do not plan to prescribe to.

## Table of Contents

1. [Usage](#usage)
  1. [With React Style](#with-react-style)
  1. [Without React Style](#without-react-style)
  1. [Es5](#es5)
1. [Rules](#rules)
  1. [Commas](#commas)

## Usage

### With React Style

1. `npm install --save-dev eslint-config-exchange-solutions babel-eslint eslint-plugin-react`
2. add `"extends": "exchange-solutions"` to your .eslintrc

### Without React Style

1. `npm install --save-dev eslint-config-exchange-solutions babel-eslint`
2. add `"extends": "exchange-solutions/base"` to your .eslintrc

### ES5 - [Rule Documenation](./blob/master/ES5-README.md)

1. `npm install --save-dev eslint-config-exchange-solutions`
2. add `"extends": "exchange-solutions/es5"` to your .eslintrc

See [Airbnb's Javascript styleguide](https://github.com/airbnb/javascript), [Towers Watson Exchange
Solutions styleguide](https://github.com/TWExchangeSolutions/eslint-config-exchange-solutions) and
the [ESlint config
docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more
information.

## Rules

## Commas

- [1](#commas.1) <a name='commas.1'></a> Additional trailing comma: **Nope.**

> Airbnb [states] that this rule makes git diffs cleaner, though we don't really see any significant
> value in this especially for Arrays or Objects that only have one item.

```javascript
// bad const hero = { firstName: 'Dana', lastName: 'Scully', };

const heroes = [ 'Batman', 'Superman', ];

// good const hero = { firstName: 'Dana', lastName: 'Scully' };

const heroes = [ 'Batman', 'Superman' ];
```

**[⬆ back to top](#table-of-contents)**

## Curly braces around objects

- [1](#curly-braces.1) <a name='curly-braces.1'></a> Either both curly braces or neither should directly enclose newlines.
-- See [the eslint docs for `object-curly-newline { "consistent": true }`](https://eslint.org/docs/rules/object-curly-newline#consistent);

**[⬆ back to top](#table-of-contents)**

## Unary increments and decrements

- [1](#plusplus.1) <a name='plusplus.1'></a> You can use `++` for loops, but otherwise use `+= 1` or `-= 1` syntax.

> The Airbnb [example](https://github.com/airbnb/javascript/blob/48448a81cc899b3cbabfc13eab5b1dc432d24f7f/README.md#variables--unary-increment-decrement)
> suggests that array methods such as `filter` and `reduce` should be used over
> traditional loops. We agree that those options are often better. However, we
> find value, in cases where loops are necessary, to be allowed the convenience
> of unary increment statements for the loop declaration. Otherwise, we agree
> with their reasoning about unary increment and decrement statements.

```javascript
// bad

const array = [1, 2, 3];
let num = 1;
num++;
--num;


// good

const array = [1, 2, 3];
let num = 1;
num += 1;
num -= 1;

for (let i = 0; i < array.length; i++) {
  console.log(`The value at ${i} is ${array[i]}`);
}
```

**[⬆ back to top](#table-of-contents)**
