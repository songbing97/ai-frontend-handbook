# Fiber

## 什么是React Fiber？
React Fiber 是 React v16 引入的一种新的协调机制，用于实现增量式的、可中断的、可恢复的组件更新。它是 React 中的一种数据结构，用于表示组件树的结构和状态，并支持更高效的调度和渲染方式。

传统的 React 调和过程是通过递归地遍历组件树来进行同步更新的，这意味着一旦开始更新，就会一直执行到更新完成，期间无法中断。这在某些情况下会导致性能问题，如组件层级较深、更新操作较耗时等情况。

React Fiber 的引入解决了这个问题。它采用了一种新的调度策略和数据结构，将组件更新过程拆分成一系列的小任务单元，称为 Fiber。这些 Fiber 之间可以进行优先级排序，可以被中断、暂停和恢复，从而实现了更细粒度的任务调度和控制。

通过使用 React Fiber，React 能够在更新过程中灵活地进行优先级调度，可以根据优先级来决定是否中断或延迟执行任务。这使得 React 在处理大型组件树、处理用户交互等情况下具有更好的响应性和性能。

总结起来，React Fiber 是 React 中的一种数据结构和调度机制，用于实现增量式的、可中断的、可恢复的组件更新。它通过拆分更新过程为多个任务单元，提供了更高效、更灵活的组件更新和渲染方式，从而提升了 React 应用的性能和用户体验。

## React Fiber的工作原理是什么？
React Fiber 的工作原理可以分为三个主要阶段：reconciliation（协调）、render（渲染）和commit（提交）。下面是对每个阶段的简要说明：

1. **Reconciliation（协调）**：在协调阶段，React Fiber 根据组件的更新请求构建 Fiber 树，该树与实际的组件树相对应。在此阶段，React 会遍历 Fiber 树，比较前后两次更新的差异，生成更新操作的列表。

   - Diff 算法：React 使用 Fiber 树的 Diff 算法进行比较。Diff 算法会逐层比较组件树中的节点，并识别出需要更新的节点。
   - 优先级调度：在协调阶段，React Fiber 会为每个 Fiber 节点分配一个优先级，用于确定任务的执行顺序。高优先级的任务会优先执行，低优先级的任务可以被中断或延迟执行。

2. **Render（渲染）**：在渲染阶段，React Fiber 会根据协调阶段生成的更新操作列表，将组件的变化映射到实际的 DOM。

   - 构建 Fiber 树：根据协调阶段的结果，React Fiber 会构建一棵新的 Fiber 树，以反映组件的变化。
   - 生成副作用列表：React Fiber 会记录组件更新过程中产生的副作用，如需要添加、修改或删除的 DOM 元素、事件处理函数等。
   - 更新实际 DOM：根据生成的副作用列表，React Fiber 会对实际的 DOM 进行相应的更新操作，以确保 UI 的变化与组件的更新保持一致。

3. **Commit（提交）**：在提交阶段，React Fiber 将实际的 DOM 更新提交到浏览器进行渲染，并执行副作用。

   - 提交阶段：React Fiber 会遍历 Fiber 树，执行 DOM 更新操作，并触发必要的副作用。
   - 事件处理：React Fiber 会处理用户的交互事件，并调用相应的事件处理函数。
   - 副作用清理：在提交阶段的末尾，React Fiber 会执行副作用的清理工作，如处理组件的卸载、取消订阅等操作。

通过这样的协调、渲染和提交阶段，React Fiber 实现了增量式的、可中断的、可恢复的组件更新，提供了更灵活和高效的渲染机制，以提升 React 应用的性能和用户体验。

## React Fiber的关键源码有哪些？
React Fiber 的实现涉及到多个关键的源码模块，其中包括以下几个主要模块：

1. **ReactFiber.js**：这是 React Fiber 的核心模块，实现了 Fiber 数据结构和调度器的主要逻辑。Fiber 是 React 中的一种数据结构，用于表示组件树的结构和状态。它具有可中断和恢复的特性，使得 React 能够支持增量式的组件更新和更灵活的任务调度。

2. **ReactFiberReconciler.js**：这个模块实现了 React Fiber 的调和器（Reconciler），负责协调和处理组件的更新过程。它定义了协调器的核心接口和算法，包括生成更新操作、执行 Diff 算法、创建和更新 Fiber 节点等。

3. **ReactFiberScheduler.js**：这个模块实现了 React Fiber 的调度器（Scheduler），负责任务的调度和优先级管理。调度器决定了任务的执行顺序，以及何时中断和恢复任务的执行。它使用优先级队列和调度策略来实现任务的调度。

4. **ReactFiberCommitWork.js**：这个模块负责提交阶段的工作，即将组件的更新映射到实际的 DOM 并执行副作用。它遍历 Fiber 树，执行 DOM 更新操作和副作用处理，以确保组件更新的一致性和正确性。

5. **ReactFiberHostConfig.js**：这个模块定义了 React Fiber 的宿主配置，即与宿主环境相关的操作和配置。它提供了与平台相关的方法，如创建和操作 DOM 元素、调度异步任务等。

以上是 React Fiber 的一些关键源码模块，它们共同工作，实现了增量式的组件更新和高效的任务调度。这些源码模块包含了 Fiber 数据结构、调和器、调度器、提交阶段的逻辑等重要部分。深入研究这些源码可以更好地理解 React Fiber 的工作原理和实现细节。


## FiberNode 中的flags是什么作用？
在 React 的 Fiber 架构中，每个 Fiber 节点都有一个 `flags` 属性。`flags` 属性是一个位字段（bitfield），用于跟踪 Fiber 节点的各种工作状态。每一位代表不同的状态或者效果。

例如，这里有一些常见的 flags：

- Placement：这表示 Fiber 节点是一个新节点，需要被插入到 DOM 中。
- Update：这表示 Fiber 节点的 props 发生了改变，需要进行更新。
- Deletion：这表示 Fiber 节点被删除，需要从 DOM 中移除。
- ChildDeletion：这表示 Fiber 节点的一个或多个子节点被删除。
- HasEffect：这表示 Fiber 节点有一些副作用需要处理，例如执行生命周期方法或者 Hook。

React 在执行渲染和更新工作时，会根据 `flags` 属性来确定需要对每个 Fiber 节点进行哪些操作。例如，如果一个 Fiber 节点的 `flags` 属性包含 `Update`，那么 React 就知道需要对这个节点进行更新。

然而，需要注意的是，`flags` 属性是 React 的内部实现细节，对于大多数开发者来说，并不需要了解。当你在使用 React 时，只需要了解和使用其公开的 API，如 JSX、组件、props、state、Hooks 等。

## FiberNode中有哪些关键的属性，它们的作用是什么？
Fiber 是 React 的一个内部数据结构，用于跟踪和管理组件的状态和副作用。每一个 Fiber 对象（也被称为 Fiber Node）代表一个 React 组件，它包含了一些描述组件状态和行为的属性。以下是一些在 FiberNode 中关键的属性：

1. **type**：组件的类型。对于类组件，这将是类本身；对于函数组件，这将是函数本身；对于 DOM 元素，这将是元素的字符串标签。

2. **child**、**sibling**、**return**：这些属性形成了 Fiber 树的结构。`child` 指向组件的第一个子组件，`sibling` 指向组件的下一个兄弟组件，`return` 指向组件的父组件。

3. **alternate**：指向当前 Fiber 节点的替代版本，也就是在上一次渲染中的 Fiber 节点。React 通过比较 alternate 和当前 Fiber 节点来判断组件是否有变化。

4. **stateNode**：对于类组件，这是类组件的实例；对于 DOM 元素，这是 DOM 节点本身。

5. **pendingProps** 和 **memoizedProps**：分别表示新的将要应用的属性和上一次渲染时的属性。React 通过比较这两者来判断 props 是否有变化。

6. **memoizedState**：组件保存的状态。对于类组件，这是 `this.state`；对于使用了 `useState` 或 `useReducer` 的函数组件，这是一个链表，包含了所有的 state 和更新函数。

7. **updateQueue**：存储了组件的状态更新和副作用。对于使用了 `useState` 或 `useReducer` 的组件，这是一个队列，包含了所有的状态更新；对于使用了 `useEffect` 或 `useLayoutEffect` 的组件，这是一个链表，包含了所有的副作用。

8. **flags**：一个位字段，表示 Fiber 节点需要进行的工作类型，例如插入（Placement）、更新（Update）或删除（Deletion）等。

然而，需要注意的是，这些属性都是 React 的内部实现细节，并不是公开的 API。在使用 React 开发时，你并不需要直接与 FiberNode 交互，也不需要关心它们的实现细节。你只需要了解并使用 React 的公共 API，如 JSX、组件、props、state、Hooks 等。
