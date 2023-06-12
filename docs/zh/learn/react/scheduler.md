# 调度器（Scheduler）

## 什么是React调度器？
React 调度器（Scheduler）是 React 框架中的一个核心模块，用于任务调度和优先级管理。它负责管理组件的更新过程，决定何时执行更新操作，并根据任务的优先级来进行调度。

React 调度器的工作原理如下：

1. **任务调度**：React 应用中的更新操作被视为任务，可以是组件的状态更新、属性变更、DOM 渲染等。调度器会收集这些任务并进行调度。

2. **优先级管理**：任务可以被赋予不同的优先级，以便调度器能够根据优先级决定任务的执行顺序。较高优先级的任务会被优先执行，以提供更好的用户体验。

3. **任务拆分与合并**：为了提高性能，调度器会根据任务的大小和复杂度，将大的任务拆分成较小的任务单元。这样可以更细粒度地控制任务的执行，并避免长时间阻塞其他任务。

4. **任务延迟与推迟**：调度器可以根据任务的优先级和浏览器的空闲时间，决定何时执行任务。它会利用浏览器的 requestIdleCallback API 或 requestAnimationFrame API，在适当的时机执行任务，以避免阻塞用户交互和动画。

5. **任务中断与恢复**：在任务执行过程中，调度器可以中断正在进行的任务，以响应更高优先级的任务。然后在空闲时间或下一次调度时，恢复中断的任务继续执行。这种中断与恢复机制可以更好地管理任务的优先级和资源的利用。

通过以上的调度策略和机制，React 调度器能够有效地管理任务的执行顺序和优先级，提供了一种高效、灵活的任务调度方式。它能够确保更新操作的及时执行，并最大程度地减少对浏览器主线程的阻塞，以提供平滑的页面渲染和响应。

## React调度器的工作原理是什么？
React 调度器的工作原理主要涉及以下几个方面：

1. **任务调度和优先级管理**：React 调度器负责任务的调度和优先级管理。它将任务分为不同的优先级，以确保高优先级任务能够尽快执行，同时避免长时间阻塞低优先级任务。

2. **任务的拆分和合并**：为了提高性能，React 调度器使用协调算法将大的更新任务拆分成较小的任务单元。这样可以更细粒度地控制任务的执行，避免阻塞浏览器主线程过长时间。

3. **任务的延迟和推迟**：React 调度器根据不同的优先级和浏览器的空闲时间，决定何时执行任务。它会利用浏览器的 requestIdleCallback API 或 requestAnimationFrame API 来安排任务的执行，并确保任务不会对用户交互和动画造成明显的影响。

4. **任务的中断和恢复**：在任务执行过程中，React 调度器可以中断正在进行的任务，以响应更高优先级的任务。然后在空闲时间或下一次调度时，恢复中断的任务继续执行。这种中断和恢复机制可以更好地管理任务的优先级和资源的利用。

5. **任务的调度队列**：React 调度器使用调度队列来管理待执行的任务。队列中的任务按照优先级进行排序，高优先级的任务先执行。React 还使用了双缓冲技术，确保任务在调度过程中不会出现突变，以避免不必要的副作用。

通过以上的工作原理，React 调度器能够有效地管理任务的执行顺序和优先级，提高 React 应用的性能和用户体验。它能够确保更新操作的及时执行，同时最大程度地减少对浏览器主线程的阻塞，以提供平滑的页面渲染和响应。

## React调度器的关键源码有哪些？
React 调度器（Scheduler）是 React 中的一个核心模块，负责任务的调度和优先级管理。调度器的关键源码包括以下几个主要模块：

1. **Scheduler.js**：这是调度器的入口文件，定义了调度器的基本接口和数据结构。它包含了任务的调度逻辑、优先级管理、调度器的创建和初始化等功能。

2. **SchedulerHostConfig.js**：该文件定义了调度器与宿主环境（如浏览器）之间的交互接口。它提供了调度器在宿主环境中的基本操作，如计时器的设置、任务的延迟执行、浏览器空闲时间的利用等。

3. **Fiber.js**：Fiber 是 React 中的一种数据结构，用于表示组件树的结构和状态。Fiber 数据结构是调度器的核心，它包含了组件的更新状态、优先级、任务链表等信息，用于实现高效的任务调度和渲染。

4. **WorkLoop.js**：这个模块定义了调度器的工作循环，也称为工作线程。工作循环会不断从任务队列中取出任务，并执行相应的操作，如更新组件、处理事件等。它还包括任务的中断与恢复、任务优先级的判断等逻辑。

5. **ExpirationTime.js**：这个模块定义了任务的过期时间，用于确定任务的优先级。过期时间越早的任务优先级越高，调度器会优先执行它们。这个模块还定义了任务的延迟策略和任务优先级的计算规则。

6. **SchedulerWork.js**：这个模块定义了任务的执行过程，包括任务的创建、提交、执行和完成等步骤。它会根据任务的优先级和调度策略来执行任务，并将任务状态更新到 Fiber 数据结构中。

以上是 React 调度器的一些关键源码模块。这些源码模块共同工作，实现了高效的任务调度和优先级管理，以确保 React 应用的性能和响应性。深入研究这些源码可以更好地理解 React 调度器的工作原理和实现细节。


## scheduleCallback函数做了什么？
`scheduleCallback` 函数是 React 内部实现的一部分，用于安排和管理异步任务的执行。这个函数在 React 的源码中被用来安排渲染和更新任务的执行。

在 React 16.6 及更高版本中，引入了新的并发模式（Concurrent Mode），可以更好地管理异步任务和渲染优先级。在这种模式下，不同的更新和渲染任务可能有不同的优先级，例如，用户交互的处理通常比数据预加载的渲染有更高的优先级。

`scheduleCallback` 函数就是实现这种异步任务调度的一部分。当一个新的更新或渲染任务需要被安排时，React 会调用 `scheduleCallback` 函数，传入任务的优先级和任务的执行函数。然后，`scheduleCallback` 函数会根据任务的优先级和当前正在执行的其他任务，决定何时执行这个新的任务。

请注意，`scheduleCallback` 是 React 内部的函数，不是公开的 API，你在编写 React 应用时不需要直接使用它。在大多数情况下，你只需要使用 React 提供的公开 API（如 `setState`、`useEffect` 等）就可以控制你的应用的渲染和更新。React 的调度系统会自动处理任务的优先级和执行时间，确保应用的流畅性和响应性。

## React调度器是如何控制时间的？这段代码在哪里？
React 有一个内部的调度器（scheduler）用于控制渲染任务的优先级和执行时间。这个调度器在 React 16.6 及更高版本中被引入，并且在 React 的 Concurrent 模式（并发模式）下有着重要的作用。

React 的调度器使用浏览器的 API（如 `requestIdleCallback` 和 `MessageChannel`）来实现异步任务调度。调度器会维护一个待执行任务队列，每个任务都有一个优先级。当浏览器有空闲时间或者有高优先级的任务需要立即执行时，调度器会从队列中选择一个任务来执行。

这个调度器的实现分散在 React 的源码中的多个文件中，主要在 `packages/scheduler` 和 `packages/react-reconciler` 目录下。在 `scheduler` 目录下的 `Scheduler.js` 和 `SchedulerHostConfig.default.js` 文件中，你可以找到关于浏览器 API 使用和任务队列管理的实现。在 `react-reconciler` 目录下的 `ReactFiberWorkLoop.js` 文件中，你可以找到关于任务执行和优先级处理的实现。

你可以在 React 的 GitHub 仓库中查看这些文件：

- `Scheduler.js`: https://github.com/facebook/react/blob/main/packages/scheduler/src/Scheduler.js
- `SchedulerHostConfig.default.js`: https://github.com/facebook/react/blob/main/packages/scheduler/src/forks/SchedulerHostConfig.default.js
- `ReactFiberWorkLoop.js`: https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberWorkLoop.js

然而，需要注意的是，React 的调度器是内部实现的一部分，并不是公开的 API。在使用 React 开发时，你并不需要直接与调度器交互，也不需要关心它的实现细节。你只需要了解并使用 React 的公共 API，如 JSX、组件、props、state、Hooks 等。

## requestIdleCallback如何使用，请给示例。
`requestIdleCallback` 是一个浏览器提供的 API，允许你安排一个函数在浏览器空闲时被调用。这个 API 有助于提升页面的性能，因为它可以确保低优先级的任务不会阻塞主线程，从而不会影响到用户的交互和高优先级的任务。

以下是 `requestIdleCallback` 的基本使用示例：

```javascript
requestIdleCallback(myIdleCallback);

function myIdleCallback(deadline) {
  while ((deadline.timeRemaining() > 0 || deadline.didTimeout) && tasks.length > 0) {
    doWork(tasks.shift());
  }

  if (tasks.length > 0) {
    requestIdleCallback(myIdleCallback);
  }
}

var tasks = [...];  // 需要执行的任务队列
function doWork(task) {
  // 处理任务...
}
```

在这个示例中，我们首先调用 `requestIdleCallback` 函数，传入我们的回调函数 `myIdleCallback`。然后，在 `myIdleCallback` 中，我们检查浏览器是否还有空闲时间，如果有，我们就从任务队列中取出任务并处理。如果处理完所有任务，我们就不再调用 `requestIdleCallback`；如果还有未处理的任务，我们就再次调用 `requestIdleCallback`，以便在下次浏览器空闲时继续处理任务。

注意，`requestIdleCallback` 的行为和具体的浏览器实现有关，不同的浏览器可能会有不同的行为。另外，尽管 `requestIdleCallback` 在大多数现代浏览器中都可用，但在一些旧的浏览器或者某些特定的环境中可能不可用。在使用 `requestIdleCallback` 时，你可能需要检查其可用性或者提供一个备选方案。

## 为什么React源码中看不到requestIdleCallback ？
React 使用了一个自己的调度器，叫做 `scheduler`，该调度器负责管理和调度任务的执行。在 `scheduler` 的实现中，React 在底层使用了浏览器的 `requestIdleCallback` API，但是这个使用被封装在了 `scheduler` 的内部。

然而，浏览器的 `requestIdleCallback` API 在某些浏览器或环境中可能不可用，或者行为可能不一致。为了提高兼容性和可靠性，React 的 `scheduler` 提供了一个备选的异步调度机制，使用 `MessageChannel` 和 `setTimeout` 来模拟 `requestIdleCallback` 的行为。

因此，当你在 React 的源码中搜索 `requestIdleCallback` 时，可能找不到直接的使用。但是，你可以在 `scheduler` 的源码中找到 `requestIdleCallback` 的相关逻辑。具体的实现可能会根据 React 的版本和平台有所不同。

你可以在 React 的 GitHub 仓库中查看 `scheduler` 的源码：

- `scheduler`: https://github.com/facebook/react/tree/main/packages/scheduler

请注意，React 的内部实现可能会随着版本的更新而改变，以上的说明是基于目前（2021年9月）的 React 实现。你可以查看 React 的最新源码以获取最准确的信息。

## MessageChannel是什么？
`MessageChannel` 是 Web API 的一部分，它提供了一种在 HTML5 Web Workers 或者同一浏览器的不同文档（例如 iframe 或者窗口）之间进行通信的方式。

一个 `MessageChannel` 有两个 `MessagePort` 属性：`port1` 和 `port2`。你可以在一个文档中创建一个 `MessageChannel`，然后通过 `postMessage` 方法将 `port2` 发送到另一个文档。然后，两个文档就可以分别通过 `port1` 和 `port2` 来发送和接收消息了。

以下是一个基本的 `MessageChannel` 使用示例：

```javascript
// 创建一个 MessageChannel
var channel = new MessageChannel();

// 在 port1 上设置 message 事件的监听器
channel.port1.onmessage = event => {
  console.log("Received message:", event.data);
};

// 通过 port2 发送消息
channel.port2.postMessage("Hello, world!");

// 输出：Received message: Hello, world!
```

在这个示例中，我们创建了一个 `MessageChannel`，然后在 `port1` 上设置了一个 `message` 事件的监听器，最后通过 `port2` 发送了一个消息。当消息被发送时，`port1` 的 `message` 事件被触发，监听器被调用，消息被输出。

需要注意的是，`MessageChannel` 只能在同源的文档之间通信，不能跨域。此外，`MessageChannel` 和 `postMessage` 方法发送的消息总是异步的，也就是说，消息的接收总是在消息发送之后的事件循环中进行。

## MessageChannel 和 setTimeout 如何模拟requestIdleCallback ？
React 的内部调度器，即 Scheduler，使用 `MessageChannel` 和 `setTimeout` 来模拟 `requestIdleCallback` 的行为，以便在不支持 `requestIdleCallback` 的浏览器环境中依然能够执行低优先级任务。

下面是模拟的基本思路：

- 创建一个 `MessageChannel`。
- 在 `MessageChannel.port1` 上监听 `message` 事件。当收到消息时，表示浏览器主线程空闲，可以执行任务。
- 通过 `MessageChannel.port2.postMessage(null)` 向 `MessageChannel.port1` 发送一个消息，这个消息会在浏览器的主线程空闲时被处理，这就是用 `MessageChannel` 来模拟 `requestIdleCallback` 的基本思路。
- 对于可能存在的任务执行超时问题，使用 `setTimeout` 设置一个回调函数，这个回调函数会在指定的时间后被执行，无论主线程是否空闲。

这是一个简化的示例，以展示如何使用 `MessageChannel` 和 `setTimeout` 来模拟 `requestIdleCallback`：

```javascript
// 创建一个 MessageChannel
var channel = new MessageChannel();

// 在 port1 上设置 message 事件的监听器
channel.port1.onmessage = function(event) {
  // 检查是否有空闲时间或者是否达到了超时时间
  if (shouldYield() || didTimeout) {
    // 如果没有空闲时间或者已经超时，就取消 setTimeout 并执行任务
    clearTimeout(timeoutId);
    performWork();
  } else {
    // 否则，再次发送一个消息，以便在下次空闲时执行任务
    channel.port2.postMessage(null);
  }
};

// 使用 setTimeout 设置一个超时回调
var timeoutId = setTimeout(function() {
  didTimeout = true;  // 设置超时标志
  performWork();      // 执行任务
}, timeout);

// 开始模拟 requestIdleCallback
channel.port2.postMessage(null);
```

注意：以上示例省略了一些实现细节，例如任务的获取和调度、空闲时间的计算等。这些内容在实际的 React 调度器中是必要的。这个示例主要是为了说明使用 `MessageChannel` 和 `setTimeout` 来模拟 `requestIdleCallback` 的基本思路。

## 为什么必须是MessageChannel，其他的不行吗？
在这个上下文中，`MessageChannel` 主要是被用来模拟浏览器的 `requestIdleCallback` API，其作用是在浏览器的主线程空闲时执行任务。当浏览器的主线程空闲时，通过 `MessageChannel` 发送的消息会被立即处理，这就为我们提供了一种方式来检测主线程的空闲状态。

当然，也有其他一些方式可以被用来检测主线程的空闲状态，例如 `setImmediate` 或者 `setTimeout`。然而，这些方式都有一些问题或者局限性：

- `setImmediate`：这是一个非标准的 API，只在一些特定的环境（例如旧版本的 IE 或者 Node.js）中可用。在大多数浏览器中，`setImmediate` 是不可用的。

- `setTimeout`：虽然 `setTimeout` 在所有的浏览器中都可用，但是它不能精确地检测主线程的空闲状态。`setTimeout` 只能在指定的时间后执行回调，而无法确保这个时间点主线程是空闲的。

相比之下，`MessageChannel` 不仅在所有的现代浏览器中都可用，而且它的行为更接近 `requestIdleCallback`。当你通过 `MessageChannel` 发送一个消息时，这个消息会在主线程的下一个空闲时间点被处理，这就为我们提供了一种相对精确的方式来检测主线程的空闲状态。这就是为什么 React 的调度器会选择使用 `MessageChannel` 来模拟 `requestIdleCallback`。

需要注意的是，这个解释是基于 React 的当前实现（截止到 2021 年 9 月）。React 的内部实现可能会随着版本的更新而改变。具体的实现细节可能会根据 React 的版本和运行环境有所不同。

## React存在预先计算和预测Task完成所需时间吗？
React并不预先计算或预测一个任务完成所需的具体时间，而是使用优先级概念来管理各种更新任务。例如，React将用户交互，如点击和键盘事件，视为高优先级任务，因为它们通常需要立即响应。而对于其他类型的更新，如网络响应或非关键的UI更新，React则可能将它们标记为低优先级任务。

在新的Concurrent模式下，React引入了"lane"的概念来进一步优化任务的调度。每个更新都被分配到一个特定的"lane"，并且每个"lane"都有一个对应的优先级。这样，React可以在处理高优先级更新时，延迟处理低优先级的更新，从而确保用户交互的流畅性。

当然，React的调度策略并不是预先计算任务所需时间，而是基于优先级的调度，以尽可能地保证用户交互的流畅性和响应速度。

需要注意的是，React的具体实现可能会根据版本和环境有所不同。为了获取最准确的信息，你可以查阅React的源代码或其官方文档。

# React中哪些事务会被包装成Task?
React 使用了一种叫做 React Fiber 的新的重调度机制，这个机制使得 React 可以将渲染工作分解为许多小的工作单元，这些小的工作单元被称为 "Tasks"。具体来说，以下的一些操作可能会在 React 中被包装成一个 Task：

1. **渲染**：当你调用 `ReactDOM.render()` 或 `this.setState()` 时，React 会创建一个新的更新任务，然后在后台异步地处理这个更新任务。

2. **生命周期方法和钩子函数**：例如 `componentDidMount`、`componentDidUpdate`、`useEffect` 等。这些方法和钩子函数在组件的生命周期中的特定时期被调用，它们通常被包装成一个 Task，并在适当的时间被调度和执行。

3. **事件处理函数**：当用户与界面交互（例如点击按钮或输入文本）时，对应的事件处理函数会被调用。这些事件处理函数也被包装成一个 Task，并在事件发生后立即被调度和执行。

React 的调度器根据每个 Task 的优先级来决定何时开始处理这个 Task。例如，用户交互产生的任务通常被视为高优先级任务，因为它们需要立即响应，而其他的任务（例如网络响应）可能被视为低优先级任务，并在主线程空闲时被处理。

需要注意的是，这个解释是基于 React 的当前实现（截止到 2021 年 9 月）。React 的内部实现可能会随着版本的更新而改变。具体的实现细节可能会根据 React 的版本和运行环境有所不同。

## 渲染一个组件会被包装成Task，两个组件更新就会变成两个Task吗？
在React中，更新操作通常会被封装成单独的任务（Task）。所以，理论上来说，如果你有两个组件需要更新，那么React可能会生成两个不同的任务。

然而，实际上，React的调度器并不总是按照“一个组件更新对应一个任务”的方式来工作。React的调度器会尝试批处理和合并更新，以提高渲染的效率。

例如，如果你在一个事件处理函数中连续调用了两次`setState`，那么React会将这两次更新合并为一个任务，然后在一次渲染中同时应用这两个更新。这被称为批量更新（Batch Update）。

此外，在React的Concurrent模式中，React引入了一个新的概念叫做“lane”。每个更新都会被分配到一个特定的“lane”，并且每个“lane”都有一个相应的优先级。在这种情况下，多个更新可能会被分配到同一个“lane”，并作为一个任务一起处理。

因此，尽管在概念上，每个组件的更新可能会被视为一个单独的任务，但在实际操作中，React的调度器会根据情况合并和批处理这些更新，以优化渲染性能。
