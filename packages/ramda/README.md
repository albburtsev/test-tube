## Thinking in Ramda

[Thinking in Ramda](http://randycoulman.com/blog/categories/thinking-in-ramda/) 🤟

 - [x] [Getting Started](http://randycoulman.com/blog/2016/05/24/thinking-in-ramda-getting-started/)
 - [x] [Combining Functions](http://randycoulman.com/blog/2016/05/31/thinking-in-ramda-combining-functions/)
 - [x] [Partial Application](http://randycoulman.com/blog/2016/06/07/thinking-in-ramda-partial-application/)
 - [x] [Declarative Programming](http://randycoulman.com/blog/2016/06/14/thinking-in-ramda-declarative-programming/)
 - [x] [Pointfree Style](http://randycoulman.com/blog/2016/06/21/thinking-in-ramda-pointfree-style/)
 - [x] [Immutability and Objects](http://randycoulman.com/blog/2016/06/28/thinking-in-ramda-immutability-and-objects/)
 - [x] [Immutability and Arrays](http://randycoulman.com/blog/2016/07/05/thinking-in-ramda-immutability-and-arrays/)
 - [x] [Lenses](http://randycoulman.com/blog/2016/07/12/thinking-in-ramda-lenses/)
 - [ ] [Wrap-Up](http://randycoulman.com/blog/2016/07/19/thinking-in-ramda-wrap-up/)

## Misc

```ts
// Takes function and returns curried function
curry<T1, T2, T3>(fn: (a: T1, b: T2) => T3): (a: T1) => (b: T2) => T3

// Takes function AND argument(s) and returns partially applied function
bind<T1, T2, T3>(fn: (a: T1, b: T2) => T3, a: T1) => (b: T2) => T3
```
