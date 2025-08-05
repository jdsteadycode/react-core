## **ITS DECLARATIVE**

- this `react` project tells about crucial feature `declarative`.
- which means the developer doesn't need to prescribe each and every step for building things.
- i.e., Doesn't need to worry about `how to do?` just needs to tell `what to do!`
- rest would be handled by `react engine` behind the scenes.

## **EXAMPLE**

- Suppose one needs to create and mount the simple `<h1>` element with text-content `This is most important heading!`
- Instead of writing it in `imperative` manner like this by doing each step and every step

```js
// create an h1 element
const h1Elem = document.createElement("h1");

// set the text content
h1Elem.textContent = "This is most important heading!";

// attach to body as it's child element
document.body.appendChild(h1Elem);
```

- one can directly write like this, and rest like creation and setting attributes would handled by `react engine`

```jsx
root.render(<h1>This is most important heading!</h1>);
```

- As by doing this:
- code reduces a lot.
- code becomes much cleaner.
- code looks easy to understand etc.
