My journey of learning Vue js in 2-3 days time frame

## Important concepts in Vue js:
- **Vue Instance**: the main Vue object that represents an application, and contains data, methods, computed properties, and more.
- **Template**: the HTML-based syntax used to define the structure and content of Vue components
- **Props**: custom attributes that can be passed to a component to configure its behavior and data.
- **Data**: the reactive state of a Vue component that updates the view when changed. Computed Properties: cached properties that are computed from the component's data, and can be used to reduce code duplication and improve performance.
- **Methods**: functions that can be called from the template or other methods, and can modify the component's data or trigger other functionality.
- **Watchers**: functions that watch for changes in the component's data, and can perform additional logic or side effects when a change occurs.
- **Directives**: special attributes in the template that allow you to apply dynamic behavior to HTML elements, such as v-if, v-for, and v-bind.
- **Lifecycle Hooks**: methods that are called at specific stages of a component's lifecycle, such as mounted, updated, and destroyed, and can be used to perform initialization, cleanup, or other actions.
- **Events**: a system for communication between components, where a child component can emit an event that the parent component can listen for and respond to.
- **Filters**: functions that can be used to transform data in the template, such as formatting dates or filtering lists.
- **Mixins**: reusable code snippets that can be shared across multiple components, and can include data, methods, computed properties, and more.

## Reactive vs Non-Reactive Frontend
- Reactive Frontend (Declartive Approach):
A reactive frontend is built using a reactive framework, such as Vue.js, React, or Angular. In a reactive frontend, the UI is bound to the data and is automatically updated when the data changes. This means that when the user interacts with the UI, such as by clicking a button or typing in a form, the changes are immediately reflected in the underlying data and the UI is updated accordingly. This makes it easier to build complex and dynamic user interfaces, and can improve the performance and responsiveness of the application.

- Non-Reactive Frontend (Imperative Approach):
A non-reactive frontend is built using traditional HTML, CSS, and JavaScript without a reactive framework. In a non-reactive frontend, the UI and the data are not directly connected, and the UI must be manually updated whenever the data changes. This means that when the user interacts with the UI, such as by clicking a button or typing in a form, the changes are not automatically reflected in the underlying data and the UI must be manually updated. This can make it more difficult to build complex and dynamic user interfaces, and can result in slower performance and less responsive applications.

In summary, a reactive frontend is designed to automatically update the UI in response to changes in the data, while a non-reactive frontend requires manual updates to keep the UI in sync with the data. Reactive frameworks can simplify the development of complex user interfaces and improve performance and responsiveness.

## Additional Resources
[Vue js documentation](https://vuejs.org/guide/introduction.html)
