# React Redux reducer+selector

This project explores key concepts in managing state within a JavaScript application, focusing on reducers, selectors, immutability, and normalization of state. By the end of this project, you'll have a solid understanding of how to maintain and manipulate application state effectively.

# Learning Objectives
By completing this project, you should be able to explain and demonstrate:

# The Purpose of a Reducer
Understand the critical role reducers play in managing state in an application. Reducers take the current state and an action, and return the new state based on that action.

# Keeping Reducers Pure
Learn why a reducer should stay as pure as possible, meaning it should not produce side effects or alter external variables.

# Avoiding Mutations in Reducers
Explore why state mutations should be avoided in reducers, ensuring that changes to state are done immutably to maintain the integrity of the state across the application.

# Using Immutable.js
Discover how Immutable.js helps maintain immutability within your reducers, making your state management more efficient and reliable.

# Normalizing State with Normalizr
Learn how to structure and normalize your state to prevent deeply nested state objects. This keeps your state shape flat and manageable, using the Normalizr library.

Selectors: What They Are and When to Use Them
Understand how selectors help extract and compute derived data from the state, allowing better separation of concerns and efficient access to necessary information.

# Resources
Reducers: Learn the principles of reducers in state management.
Selectors: Understand how selectors function and how to use them to query your state.
Writing Tests: A guide to testing your reducers and selectors.
Immutable Map Documentation: Learn how to use Immutable.js to keep your state immutable.
Normalizr: Documentation and examples of using Normalizr to normalize your state.
Normalizing State Shape: Tips and strategies for maintaining a normalized state shape for better scalability and performance.
