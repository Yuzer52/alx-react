# 0x09. React Redux Connectors and Providers

## Learning Outcomes of this Project:

1. **Understanding Redux Connectors**:
   - Learn what connectors are in Redux and how they bridge your React components with the Redux store.
   - Understand how to use connectors to extract state and dispatch actions from your store into your components.

2. **Using `mapStateToProps` and `mapDispatchToProps`**:
   - Learn how to use the `mapStateToProps` function to pass specific slices of the Redux store’s state as props to your components.
   - Explore `mapDispatchToProps` to allow components to dispatch actions, and how to bind action creators for dispatching actions more efficiently.

3. **Mapping Action Creators to Components**:
   - Learn how to connect Redux action creators to components using connectors, allowing them to modify the Redux store’s state.
   - Understand the process of handling synchronous and asynchronous action creators in Redux.

4. **Handling Asynchronous Actions with Redux Thunk**:
   - Dive into `Redux Thunk` to manage async operations like API calls, and integrate them seamlessly with Redux.
   - Learn how to map async action creators to your components, enabling them to trigger async operations and handle the resulting state changes.

5. **Setting Up Redux Providers**:
   - Understand the role of Redux Providers in React applications, and how they act as a wrapper that makes the Redux store available to all components in your app.
   - Learn how to configure your app to properly use a Redux Provider and how to integrate the Redux store into your app’s component tree.

6. **Improving Performance with Reselect**:
   - Discover how to improve the performance of your connectors by using the `Reselect` library to memoize selector functions.
   - Learn how to avoid unnecessary re-renders and optimize how your app extracts data from the Redux store.

7. **Debugging with Redux DevTools**:
   - Explore the **Redux DevTools** extension and its features for debugging your application.
   - Learn how to track changes to the Redux store, inspect dispatched actions, and monitor the state at different points in time to better understand your app’s behavior.

By the end of this project, you'll have a strong understanding of how to connect Redux to React components, manage asynchronous operations, optimize performance, and debug your application’s state efficiently.
