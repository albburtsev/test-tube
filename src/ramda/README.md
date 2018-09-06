## Thinking in Ramda

[Thinking in Ramda](http://randycoulman.com/blog/categories/thinking-in-ramda/) 🤟

 - [x] [Getting Started](http://randycoulman.com/blog/2016/05/24/thinking-in-ramda-getting-started/)
 - [x] [Combining Functions](http://randycoulman.com/blog/2016/05/31/thinking-in-ramda-combining-functions/)
 - [x] [Partial Application](http://randycoulman.com/blog/2016/06/07/thinking-in-ramda-partial-application/)
 - [x] [Declarative Programming](http://randycoulman.com/blog/2016/06/14/thinking-in-ramda-declarative-programming/)
 - [ ] [Pointfree Style](http://randycoulman.com/blog/2016/06/21/thinking-in-ramda-pointfree-style/)

## Misc

```ts
// Takes function and returns curried function
curry<T1, T2, T3>(fn: (a: T1, b: T2) => T3): (a: T1) => (b: T2) => T3

// Takes function AND argument(s) and returns partially applied function
bind<T1, T2, T3>(fn: (a: T1, b: T2) => T3, a: T1) => (b: T2) => T3
```
