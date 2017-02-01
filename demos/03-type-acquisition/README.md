
# Type Acquisition

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
