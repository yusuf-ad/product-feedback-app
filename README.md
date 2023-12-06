# REACT BEST PRACTICES

# Components

👎 Helper functions shouldn't read from the component's state
👍 Extract them and pass only the values they need

👍 Don’t hardcode markup for navigation, filters or lists.
👍 Use a configuration object and loop through the items instead.

## Use Error Boundaries

## Pass Objects Instead of Primitives

👎 Don't pass values on by one if they're related
👍 Use an object that holds all of them instead

👎 Try to avoid short-circuit operators
👍 Use a ternary instead

👎 Nested ternaries are hard to read in JSX
👍 Place them inside a component on their own

👎 Don't write loops together with the rest of the markup
👍 Extract the list in its own component

## Assign Default Props When Destructuring

## Avoid Nested Render Functions

# State Management

## Use Reducer with Context

👎 Don't use too many separate pieces of state
👍 Unify them in a reducer instead

## Prefer Hooks to HOCs and Render Props

👎 Avoid using render props
👍 Favor hooks for their simplicity and readability

## Use Data Fetching Libraries

## State Management Libraries

# Component Mental Models

## Stateless & Stateful

# Application Structure

## Group by Route/Module

👎 Don't group by technical details
👍 Group by module/domain

## Create a Common Module

👍 Components like buttons, inputs and cards are used all over the place.

## Use Absolute Paths

👎 Don't use relative paths
👍 Absolute ones don't change

## Wrap External Components

👎 Don't import directly
👍 Export the component and use it referencing your internal module

## Move Components in Folders

# Performance

## Don't Optimize Prematurely

👍 Prioritize building readable and maintainable components before performance.

# Watch The Bundle Size

## Rerenders - Callbacks, Arrays and Objects

## Test Correct Rendering
