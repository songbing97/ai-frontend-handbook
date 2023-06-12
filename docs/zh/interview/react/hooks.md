# Hooks

## useMemo 和 useCallback有什么区别？
`useMemo` 和 `useCallback` 是 React 的 Hooks，它们的主要用途都是优化性能，但它们用于不同的场景。

`useMemo` 是一个函数，它接受两个参数：一个 "create" 函数和一个依赖项数组。它会返回 "create" 函数的返回值。如果依赖项数组没有发生变化，那么在下一次渲染时，`useMemo` 将直接返回上一次计算的值，而不是再次调用 "create" 函数。这可以避免在每次渲染时都进行昂贵的计算。

这是一个 `useMemo` 的示例：

```jsx
const expensiveValue = useMemo(() => {
  let result = 0;
  // Assume computeExpensiveValue is a function that takes a long time to complete.
  result = computeExpensiveValue(a, b);
  return result;
}, [a, b]);  // Only re-run the expensive function if 'a' or 'b' changes.
```

`useCallback` 也是一个函数，它也接受两个参数：一个函数和一个依赖项数组。但是，它返回的是传入的函数，而不是函数的返回值。这样，只有当依赖项数组发生变化时，传入的函数才会改变。这对于优化那些依赖于函数引用稳定性的组件（例如，应该仅在 prop 改变时重新渲染的子组件）非常有用。

这是一个 `useCallback` 的示例：

```jsx
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],  // Only change the callback if 'a' or 'b' changes.
);
```

总的来说，你可以把 `useMemo` 看作是用于优化复杂计算结果的存储的，而 `useCallback` 则是用于优化函数引用的存储的。

## 