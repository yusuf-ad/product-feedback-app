# React Best Practices

## Components

### Helper Functions

👎 **Avoid:** Reading from the component's state.
👍 **Best Practice:** Extract and pass only necessary values.

👍 **Best Practice:** Avoid hardcoding markup for navigation, filters, or lists. Use a configuration object and loop through items.

### Error Boundaries

### Props Handling

👎 **Avoid:** Passing related values individually.
👍 **Best Practice:** Use an object to hold related values.

👎 **Avoid:** Using short-circuit operators.
👍 **Best Practice:** Use a ternary operator instead.

👎 **Avoid:** Nested ternaries in JSX.
👍 **Best Practice:** Place complex ternaries inside their own component.

👎 **Avoid:** Writing loops within markup.
👍 **Best Practice:** Extract loops into their own component.

### Default Props

👍 **Best Practice:** Assign default props when destructuring.

### Nested Render Functions

👎 **Avoid:** Using nested render functions.

## State Management

### Reducer with Context

👎 **Avoid:** Too many separate pieces of state.
👍 **Best Practice:** Unify state using a reducer.

### Hooks vs. HOCs and Render Props

👎 **Avoid:** Using render props.
👍 **Best Practice:** Prefer hooks for simplicity and readability.

### Data Fetching

👍 **Best Practice:** Utilize data fetching libraries.

### State Management Libraries

## Component Mental Models

### Stateless & Stateful

## Application Structure

### Grouping

👎 **Avoid:** Grouping by technical details.
👍 **Best Practice:** Group by module/domain.

### Common Module

👍 **Best Practice:** Create a common module for reusable components like buttons, inputs, and cards.

### Path Handling

👎 **Avoid:** Relative paths.
👍 **Best Practice:** Use absolute paths for stability.

### External Components

👎 **Avoid:** Importing external components directly.
👍 **Best Practice:** Export the component and reference it internally.

### Folder Structure

👍 **Best Practice:** Organize components into folders.

## Performance

### Optimization

👍 **Best Practice:** Prioritize readable and maintainable components before optimizing for performance.

### Bundle Size

👍 **Best Practice:** Monitor and manage bundle size.

### Rerenders

👍 **Best Practice:** Avoid unnecessary rerenders caused by callbacks, arrays, and objects.

### Testing

👍 **Best Practice:** Ensure correct rendering through testing.
