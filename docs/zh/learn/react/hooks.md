# hooks

:::tip 注意
1. hooks有三种状态，分别是mount、update、和rerender。在三种情况下调用的时候，执行函数不相同。
2. hooks本质上是fiber节点上挂载的一个缓存链表。
3. 读者可以根据我下方的提问，随我一同探寻源码机制。
  :::

## 什么是React hooks？
React Hooks 是 React 16.8 引入的一项功能，它允许在无需编写类组件的情况下，在函数式组件中使用状态和其他 React 特性。

传统上，为了在 React 中使用状态和生命周期方法，需要创建类组件，并且使用类组件的实例来管理状态和处理生命周期。然而，React Hooks 提供了一种新的方式，可以在函数式组件中使用状态和其他特性，使得函数式组件具有类似类组件的能力。

React Hooks 提供了一系列的内置 Hook 函数，如 useState、useEffect、useContext 等，用于管理组件的状态、副作用和上下文等。

使用 React Hooks 的好处包括：

1. **更简洁的代码**：使用 React Hooks 可以将状态和副作用等逻辑直接写在函数组件内部，避免了编写类组件和使用 this 的复杂性，使代码更加简洁易懂。

2. **更方便的状态管理**：使用 useState Hook 可以在函数组件中定义和更新状态，而无需编写类组件和手动处理状态更新逻辑。

3. **更灵活的副作用处理**：使用 useEffect Hook 可以在函数组件中处理副作用，如订阅数据、修改 DOM 等操作，而无需使用类组件的生命周期方法。

4. **更好的复用性和组合性**：使用自定义的 Hook 可以将一些逻辑和状态抽象为可复用的函数，方便在多个组件中共享和组合使用。

React Hooks 在函数式组件中引入了更多的功能和灵活性，使得开发者可以更加便捷地编写 React 组件，并享受到更好的开发体验。

## React hooks的工作原理是什么？
React Hooks 的工作原理可以简单描述为以下几个步骤：

1. **Hook 的使用**：在函数式组件中使用 React Hooks，通过调用内置的 Hook 函数（如 useState、useEffect、useContext 等）来引入相应的功能。这些 Hook 函数是由 React 提供的，可以通过 import 导入。

2. **状态和副作用管理**：使用 useState Hook 可以在函数组件中定义和管理状态。useState 返回一个包含当前状态和更新状态的数组，可以通过解构赋值来获取和更新状态的值。使用 useEffect Hook 可以处理副作用，如订阅数据、修改 DOM 等操作。useEffect 接收一个副作用函数和一个依赖数组，当依赖数组中的值发生变化时，副作用函数会被调用。

3. **组件更新和渲染**：当函数组件被调用时，React 会根据组件内部的 Hook 函数调用来记录和管理状态的变化。当状态发生变化时，React 会重新渲染组件，并根据更新后的状态来更新组件的界面。

4. **Hook 调用顺序的重要性**：React Hooks 的工作原理中，Hook 的调用顺序非常重要。React 会按照 Hook 调用的顺序来确定每个 Hook 对应的状态和上下文。这意味着在每次渲染时，Hook 的调用顺序必须保持稳定不变，否则可能导致状态错乱或无法正确更新。

React Hooks 的工作原理基于 React 的调和器机制，通过 Hooks 的调用和状态管理，实现了在函数式组件中使用状态和副作用的能力。通过 Hook 函数的调用，React 能够追踪和更新组件的状态，从而实现组件的更新和渲染。

## React hooks的关键源码有哪些？
React Hooks 的实现涉及到一些关键的源码模块，其中包括以下几个主要模块：

1. **ReactFiber.js**：这是 React Hooks 的核心模块，实现了 Fiber 数据结构和调和器的主要逻辑。Fiber 是 React 中的一种数据结构，用于表示组件树的结构和状态。它在 React Hooks 中被用作任务单元，负责调度和处理组件的更新。

2. **ReactHooks.js**：这个模块实现了 useState、useEffect、useContext 等内置 Hook 函数的逻辑。它定义了 Hook 函数的创建、调用和状态管理，以及与 Fiber 数据结构的交互。ReactHooks.js 中的代码是实现具体 Hook 函数的核心部分。

3. **Scheduler.js**：这个模块是 React 调度器（Scheduler）的实现，与 React Hooks 密切相关。调度器负责任务的调度和优先级管理，React Hooks 利用调度器来安排和管理 Hook 函数的执行。

4. **ReactUpdateQueue.js**：这个模块定义了组件的更新队列，负责管理组件状态的变更和更新操作。它与 React Hooks 的 useState 和 useReducer Hook 密切相关，用于在函数组件中管理和更新状态。

5. **ReactElement.js**：这个模块定义了 React 元素的结构和创建方式，React Hooks 通过 React 元素来标记和识别组件的 Hook 使用情况。

这些是 React Hooks 的一些关键源码模块，其中涉及了 Fiber 数据结构、调度器、状态管理和更新队列等核心概念。React Hooks 的实现非常复杂，涉及到更多的源码文件和模块。深入研究这些源码可以更好地理解 React Hooks 的工作原理和实现细节。

## useState的实现原理是什么？
`useState` 是 React 中用于在函数组件中声明和使用状态的钩子函数。它的实现原理涉及 React 内部的一些机制。

在函数组件中使用 `useState` 时，你会调用它并传入初始状态值，它会返回一个数组，数组的第一个元素是当前状态的值，第二个元素是更新状态的函数。例如：

```jsx
const [count, setCount] = useState(0);
```

实现 `useState` 的关键是要在函数组件之间保持状态的持久性，同时在更新状态时能够触发组件的重新渲染。为了实现这个目标，React 使用了一种叫做“Fiber”的内部数据结构和调度算法。

当调用 `useState` 时，React 内部会检查当前组件的 Fiber 节点，找到与该组件相关联的状态，并返回相应的值和更新函数。如果是首次渲染组件，React 会创建一个新的状态，并与该组件关联起来。如果是后续渲染，React 会找到与组件相关联的旧状态，并返回它。

当你调用更新函数时，React 会标记组件为“脏”（dirty），表示该组件需要重新渲染。然后，React 会执行调度算法来决定何时以及如何更新组件。这通常发生在当前 JavaScript 任务执行完毕后，在浏览器空闲时进行。

在重新渲染组件时，React 会比较新旧状态的值，确定是否发生了变化。如果状态值发生了变化，React 会更新组件的视图，反之则不进行任何操作。这样可以避免不必要的重渲染，提高性能。

总结起来，`useState` 的实现原理基于 React 内部的 Fiber 调度算法，它通过管理状态的持久性和触发组件的重新渲染来实现在函数组件中使用状态的功能。



## useRef的实现原理是什么？
:::tip 注意
1. useRef的本质就是一个缓存hook。
2. useRef通过ref标记，在node更新的时候，会把元素挂载到ref.current上
  :::
`useRef` 是 React 的一个内置 hook，它返回一个可变的 ref 对象，其 `.current` 属性被初始化为传入的参数（`initialValue`）。返回的对象将在组件的整个生命周期中保持不变。

```jsx
const refContainer = useRef(initialValue);
```

ref 的主要用途有两个：一是访问和修改 DOM 元素，二是存储可变的值，而这个值在组件重新渲染时不会被重置。

在函数组件中，每次渲染都会执行组件函数，导致所有的局部变量、参数和函数都被重新创建。然而，`useRef` 返回的对象在每次重新渲染时都保持不变，这样我们就可以在这个对象的 `.current` 属性中存储值，这个值在组件的所有渲染中都是可访问和可修改的。

`useRef` 的实现原理主要涉及 React 的工作方式。React 会跟踪正在运行的组件和它的 hooks。当你调用 `useRef` 时，React 会为你的组件实例分配一个 "slot" 来存储 ref，这个 "slot" 在组件的整个生命周期中保持不变。

如果我们想实现一个简化的 `useRef`，可能会是这样的：

```jsx
function useRef(initialValue) {
  // `_currentHook` 是 React 维护的全局变量，表示当前处理的 hook
  const ref = React._currentHook === null ? { current: initialValue } : React._currentHook;
  React._currentHook = ref;  // 下次组件重新渲染时，React 将会返回同一个 ref
  return ref;
}
```

注意，以上只是为了解释 `useRef` 的原理，实际的 React 源码更复杂，并且有更多的错误检查和优化。你不应在你的代码中使用或依赖 `React._currentHook`，因为这是 React 的内部实现细节，可能会在未来的版本中改变。

## hook当中的queue是什么？
在 React 中，当你使用 `useState` 或 `useReducer` 这类 stateful 的 Hooks 时，React 会为每个 hook 创建一个内部的 queue，用于存储来自于组件的状态更新。

每次当你调用一个像 `setState` 或者 `dispatch` 这样的更新函数时，React 就会把新的更新（一个新的 state 值或者一个 action）加入到对应的 queue 中。

然后，React 在下一次的组件渲染时，就会遍历这个 queue，执行所有的更新。例如，对于 `useState` hook，React 会用 queue 中的最后一个更新来设置新的 state 值。对于 `useReducer` hook，React 会依次执行 queue 中的所有 action，得出新的 state 值。

这个 queue 的机制使得 React 可以在同一渲染周期内处理多个状态更新，同时也支持像批量更新这样的优化。

然而，请注意，这是 React 内部实现的一部分，并不是 React 的公共 API。在使用 React 开发时，你不需要直接操作这些 queue，只需要正确地使用 React 的 Hook API 即可。

## 什么情况下，使用useReducer比使用useState更好？
在React中，`useState`和`useReducer`都是用于在函数组件中管理和更新状态的Hooks。`useState`适用于较为简单的状态管理场景，而`useReducer`更适合处理复杂的状态逻辑，以及多个子状态之间有相互依赖关系的情况。以下是一些更适合使用`useReducer`的情况：

1. **复杂的状态逻辑**：如果组件内部的状态逻辑较为复杂，或者新的状态需要依赖之前的状态，那么`useReducer`会是一个更好的选择。使用`useReducer`可以把复杂的逻辑抽离出来，让状态更新更可预测。

2. **有多个互相依赖的子状态**：当你有多个相互依赖的子状态需要一起更新时，使用`useReducer`可以确保所有的状态更新是同步完成的，避免了因为状态更新顺序带来的问题。

3. **需要复用状态更新逻辑**：如果在多个组件或者事件处理函数中需要复用相同的状态更新逻辑，那么可以把这部分逻辑抽离到reducer函数中，提高代码复用性。

4. **优化性能**：在某些场景下，使用`useReducer`可以避免不必要的组件渲染。比如，当状态更新很频繁，但是只有特定的状态改变才需要组件重新渲染时，可以使用`useReducer`来优化。

总的来说，如果状态更新逻辑比较简单，那么使用`useState`就已经足够。但是如果状态逻辑比较复杂，或者涉及到多个子状态的联动更新，那么使用`useReducer`会让代码更易于维护和理解。

## hook当中的NoLanes和NoLane是什么？
在React的Fiber架构中，Lanes是一种调度优先级的表示方式，它们被引入来替代React 旧的优先级系统。Lanes 的概念和实现允许React更好地调度和处理更新，特别是在并发模式（Concurrent Mode）下。

“Lanes” 可以被理解为是处理任务的不同"车道"。在 React 内部，不同类型的更新（例如用户交互、网络响应等）可能被分配到不同的 Lanes，这些 Lanes 对应于不同的优先级。通过这种方式，React 可以优先处理高优先级的更新，同时可能延迟处理低优先级的更新。

"NoLanes" 和 "NoLane" 是 React 内部的两个特殊的常量。它们在源码中被定义如下：

```javascript
export const NoLane: Lane = 0b0000000000000000000000000000000;
export const NoLanes: Lanes = 0b0000000000000000000000000000000;
```

"NoLane" 表示一个没有任何任务的 Lane，而 "NoLanes" 表示一组没有任何任务的 Lanes。在 React 的源码中，它们通常被用来初始化一些变量，或者作为一些函数的默认返回值。

然而，请注意，Lanes 和相关的概念是 React 的内部实现细节，对于大多数开发者而言，了解这些并不是必须的。在使用 React 编写应用时，你只需要了解并使用 React 的公共 API，如 JSX、组件、props、state、Hooks 等。


## hook中的baseState、baseQueue是什么？
在 React Hooks 的实现中，`baseState` 和 `baseQueue` 是 `useState` 和 `useReducer` 等 Hooks 的一部分，它们用于存储和处理状态更新。

`baseState` 是 Hook 的初始状态或者最后一次提交更新后的状态。每当有一个新的状态更新被提交（也就是说，这个更新被 React 应用到 DOM 上，并且这个更新的效果对用户可见），`baseState` 就会被更新为这个新的状态。

`baseQueue` 是一个队列，它存储了当前 Hook 还未处理的所有状态更新。每次你调用 `setState` 或 `dispatch` 时，新的状态更新就会被加入到 `baseQueue` 中。然后，在下一次组件渲染时，React 会遍历并处理 `baseQueue` 中的所有状态更新，然后根据这些更新计算出新的状态。

然而，需要注意的是，`baseState` 和 `baseQueue` 是 React 内部实现的一部分，并不是公开的 API。当你在使用 React Hooks（如 `useState` 或 `useReducer`）时，你不需要直接与 `baseState` 或 `baseQueue` 交互，也不需要关心它们的实现细节。只需要按照 React 的 Hook 规则正确地使用 `setState` 和 `dispatch` 等函数就可以了。


## React context的原理是什么？
React Context 是 React 提供的一种组件间共享数据的方法。它可以使你在组件树中传递数据，而不必通过每一层手动传递。以下是关于 React Context 的基本原理：

1. **创建 Context**：首先，你需要使用 `React.createContext` 创建一个 Context 对象。这个函数接受一个参数，这是 Context 的默认值，当组件找不到匹配的 Provider 时，会使用这个默认值。

   ```jsx
   const MyContext = React.createContext(defaultValue);
   ```

2. **Context.Provider**：Provider 是一个 React 组件，它允许子组件消费到距离它们最近的那个 Provider 提供的 value。你可以通过 Provider 的 `value` 属性来传递数据。

   ```jsx
   <MyContext.Provider value={/* some value */}>
   ```

3. **Context.Consumer 或 useContext Hook**：这是组件消费 Context 数据的方式。`Context.Consumer` 是一个 React 组件，需要传入一个函数作为子元素，这个函数的参数就是 Context 的 value。

   ```jsx
   <MyContext.Consumer>
     {value => /* render something based on the context value */}
   </MyContext.Consumer>
   ```

   如果你使用的是函数组件，你还可以使用 `useContext` Hook 来消费 Context 数据。

   ```jsx
   const value = useContext(MyContext);
   ```

Context 的原理是基于 JavaScript 的语言特性实现的，具体来说，就是通过创建一个对象，然后通过这个对象的 `Provider` 组件和 `Consumer` 组件（或 `useContext` Hook）来共享数据。在内部，React 通过将 `value` 作为 `Provider` 组件的属性来提供数据，并通过 `Consumer` 组件或 `useContext` Hook 来让子组件可以访问到这个数据。

值得注意的是，Context 不应该被用来替代所有的状态管理，只有那些需要在组件树中被明确共享的数据才应该使用 Context。

## React.memo会怎么判断是否更新？
`React.memo` 是 React 提供的一个高阶组件（Higher-Order Component），用于优化函数组件的性能。它可以帮助避免不必要的重渲染，通过对比前后两次渲染的输入属性（props）来判断是否需要重新渲染组件。

`React.memo` 默认使用浅比较（shallow comparison）来对比前后两次的输入属性。浅比较会逐个比较每个属性的值，如果任意一个属性的值发生了变化，`React.memo` 将会触发组件的重新渲染。

具体来说，`React.memo` 的更新判断过程如下：

1. 首次渲染：当组件首次渲染时，`React.memo` 会渲染并记住结果。

2. 后续渲染：当组件的父组件重新渲染时，`React.memo` 会进行判断：
   - `React.memo` 会比较前后两次的输入属性。如果输入属性是基本类型（如字符串、数字、布尔值等），则进行值的比较。如果输入属性是引用类型（如对象、数组等），则进行引用的比较。
   - 如果所有的输入属性都没有发生变化（即浅比较结果相等），则 `React.memo` 不会触发组件的重新渲染，直接返回之前记住的结果。
   - 如果任意一个输入属性发生了变化（即浅比较结果不相等），`React.memo` 会重新渲染组件，并记住新的渲染结果。

需要注意的是，`React.memo` 只对输入属性进行比较，它不会对组件内部状态或其他上下文（context）进行比较。如果组件的渲染结果仍然依赖于这些因素，则即使输入属性没有发生变化，组件也会重新渲染。

为了进一步优化性能，你还可以通过自定义比较函数来覆盖 `React.memo` 的默认比较行为。你可以使用 `React.memo(component, areEqual)` 的形式来创建一个经过自定义比较的 `memoized` 组件。`areEqual` 函数接收前后两次输入属性的参数，并返回一个布尔值，指示是否需要重新渲染组件。

总结起来，`React.memo` 根据浅比较来判断组件是否需要重新渲染。如果所有的输入属性都没有发生变化，则组件不会重新渲染。这可以提高性能，避免不必要的渲染操作。


## React 是如何通知依赖于该 Context 的组件进行重新渲染的？


	React 使用了一种名为“发布-订阅”（Publish-Subscribe）模式来通知依赖于某个 Context 的组件进行重新渲染。

当使用 `React.createContext` 创建一个 Context 对象时，React 会为该 Context 对象创建一个 Provider 组件和一个 Consumer 组件。这两个组件在内部通过 React 的上下文机制进行通信。

1. **Provider 组件**：Provider 组件负责提供 Context 的值。当 Provider 组件的值发生变化时，它会通知所有订阅了该 Context 的组件进行重新渲染。

   ```jsx
   <MyContext.Provider value={/* some value */}>
   ```

   当 Provider 组件的值更新时，React 会递归遍历组件树，找到订阅了该 Context 的组件，并触发这些组件的重新渲染。(函数updateContextConsumer)

2. **Consumer 组件**：Consumer 组件负责订阅 Context 的值。当组件内部的 Consumer 组件订阅了某个 Context 时，它会在 Context 值发生变化时接收到通知，并触发重新渲染。

   ```jsx
   <MyContext.Consumer>
     {value => /* render something based on the context value */}
   </MyContext.Consumer>
   ```

   当 Provider 组件的值发生变化时，订阅了该 Context 的 Consumer 组件会接收到最新的 Context 值，并在组件内部触发重新渲染。

React 通过将 Provider 组件和 Consumer 组件嵌套在组件树中，建立了一种订阅关系。当 Provider 组件的值发生变化时，React 会自动触发组件树中所有订阅了该 Context 的 Consumer 组件进行重新渲染。这种机制确保了当 Context 值变化时，所有依赖该 Context 的组件都能及时获得最新的值并进行相应的更新。

需要注意的是，在 React 16.8 版本之后，还引入了 `useContext` Hook，它提供了一种更便捷的方式来订阅和获取 Context 的值。使用 `useContext` Hook 的组件会自动订阅相应的 Context，并在 Context 值发生变化时进行重新渲染。


