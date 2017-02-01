
# Demos

## Demo: Hybrid Project

### `allowJs` Compiler Option

You can selectively convert JS files to TS.

Add a `tsconfig.json` file to the project with support for JS files.

```
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es5",
        "noImplicitAny": false,
        "sourceMap": false,
        "allowJs": true,
        "outDir": "dist"
    },
    "exclude": [
        "dist"
    ]
}
```

Code in JS files can see code in TS files and vice versa.

### Adding `d.ts` Files to Refine JavaScript Types

You can add `d.ts` files to provide type information for the JavaScript files in your project.

```
declare class Rating {
  username: string;
  rating: number;
  comment: string;

  constructor(username: string, rating: number, comment: string);
}

export = Rating;
```

### Language Service Benefits

The TypeScript language service give us the ability to navigate by symbols.

* Goto definition
* Peek definition
* Find all references

We can also rename by symbol.

## Demo: Type Acquisition

Not only can we create declaration `d.ts` files our own types, but we can acquire declaration files for third party libraries and frameworks.

The DefinitelyTyped GitHub repo is a community driven effort to create declaration files for many of the popular JavaScript libraries and frameworks.

In the early days of TypeScript we used to copy and paste the `d.ts` file contents into our projects. But that was less than ideal, so TSD was developed by the community as a package manager for TypeScript declaration files. That was later succeeded by Typings, another community developed effort.

As of TypeScript v2.0, we now have an officially support way to acquire type declaration files. Instead of building yet another package manager, the TypeScript team decided to use the package manager that everyone is already using: NPM.

Install your dependencies and your declaration file(s)!

```
npm install --save lodash
npm install --save-dev @types/lodash
```

_Note: There doesn't appear to be a way to restrict usage of the global variable._

## Demo: Strict Null Checking

### `null` and `undefined` aware types and strict null checks (2.0)

TypeScript 2.0 introduces two new types, `null` and `undefined`.

Previously, `null` and `undefined` were assignable to anything. The new `strictNullChecks` compiler option removes `null` and `undefined` from very type. This forces you to be explicit and deliberate with where `null` and `undefined` are expected or allowed.

```
// Compiled with --strictNullChecks
let x: number;
let y: number | undefined;
let z: number | null | undefined;
x = 1;  // Ok
y = 1;  // Ok
z = 1;  // Ok
x = undefined;  // Error
y = undefined;  // Ok
z = undefined;  // Ok
x = null;  // Error
y = null;  // Error
z = null;  // Ok
x = y;  // Error
x = z;  // Error
y = x;  // Ok
y = z;  // Error
z = x;  // Ok
z = y;  // Ok
```

Types that don't include `undefined` must be assigned a value before they can be used.

```
// Compiled with --strictNullChecks
let x: number;
let y: number | null;
let z: number | undefined;
x;  // Error, reference not preceded by assignment
y;  // Error, reference not preceded by assignment
z;  // Ok
x = 1;
y = null;
x;  // Ok
y;  // Ok
```

Optional parameters and properties automatically have `undefined` added to their types.

```
// Compiled with --strictNullChecks
type T1 = (x?: number) => string;              // x has type number | undefined
type T2 = (x?: number | undefined) => string;  // x has type number | undefined
```

Non-null and non-undefined type guards

```
function f(x: number): string {
  return x.toString();
}
const x: number | null | undefined;

// f(x); // error

// if (x) {
//   f(x); // okay... x is a number
// }

// const a = x != null ? f(x) : ''; // a is a string
// const a = x && f(x); // a is a string?
```

## Demo: Type Analysis

### Control flow based type analysis (2.0)

TypeScript 2.0 implements a control flow based type analysis for local variables and parameters. Previously the type analysis was limited to `if` statements and `?:` conditional expressions and didn't include the effects of assignments and control flow constructs such as `return` and `break`.

```
function foo(x: string | number | boolean) {
    if (typeof x === "string") {
        x; // type of x is string here
        x = 1;
        x; // type of x is number here
    }
    x; // type of x is number | boolean here
}

function bar(x: string | number) {
    if (typeof x === "number") {
        return;
    }
    x; // type of x is string here
}
```

Control flow based type analysis plays an important role when strict null checking is enabled. This allows you to allow `null` or `undefined` and then write a type guard to eliminate those types.

```
function test(x: string | null) {
    if (x === null) {
        return;
    }
    x; // type of x is string in remainder of function
}
```

It also allows the compiler to know definitely when a parameter or local has been assigned a value and is safe to use.

```
function mumble(check: boolean) {
    let x: number; // Type doesn't permit undefined
    x; // Error, x is undefined
    if (check) {
        x = 1;
        x; // Ok
    }
    x; // Error, x is possibly undefined
    x = 2;
    x; // Ok
}
```
