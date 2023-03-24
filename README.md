My journey of learning Vue js in 2-3 days time frame

## Important concepts in Vue js:
- **Vue Instance**: the main Vue object that represents an application, and contains data, methods, computed properties, and more.
- **Template**: the HTML-based syntax used to define the structure and content of Vue components
- **Props**: custom attributes that can be passed **to a component** to configure its behavior and data. They are also used for what's called **Parent Child Communication** In addition to that they are **Immutable**.
- **Events**: Events emitted to send data out of components.
- **Data**: the reactive state of a Vue component that updates the view when changed. Computed Properties: cached properties that are computed from the component's data, and can be used to reduce code duplication and improve performance.
- **Methods**: Used with event binding or data binding. functions that can be called from the template or other methods, and can modify the component's data or trigger other functionality.
- **Watchers**: Not used directly in Templates. functions that watch for changes in the component's data, and can perform additional logic or side effects when a change occurs.
- **Computed Properties**: Used with data binding. There is a difference here between Methods and Computed Properties Vue Js is aware of the dependencies of Computed Properties and Re-run it when one of the dependencies changed unlike methods not attached to any event it's like data properties in Python.
- **Directives**: special attributes in the template that allow you to apply dynamic behavior to HTML elements, such as v-if, v-for, and v-bind.
- **Lifecycle Hooks**: methods that are called at specific stages of a component's lifecycle, such as mounted, updated, and destroyed, and can be used to perform initialization, cleanup, or other actions.
- **Events**: a system for communication between components, where a child component can emit an event that the parent component can listen for and respond to.
- **Filters**: functions that can be used to transform data in the template, such as formatting dates or filtering lists.
- **Mixins**: reusable code snippets that can be shared across multiple components, and can include data, methods, computed properties, and more.
- **Interpolation and Data Binding**: Interploate and data bind data properties from vue js app into HTML 
- **Two Way Binding**: Data Binding + Event Binding e.g: using `v-model`
- **Rendering Conditional Contents & Lists**: v-if, v-else-if, v-else (Remove and add element from the DOM which costs performance), v-show (Hide and show element from the DOM so it is performance optimized)
- **Vue Js components**: In Vue.js, a component is **a self-contained**, **reusable piece of code that encapsulates HTML, CSS, and JavaScript logic**. Components can be thought of as building blocks that make up a Vue.js application.
- **Provide and Inject**: Providing and injecting data from parent to child. It's prefered for funnel of communication channels.
- **Global vs Local Components**: You need to be aware when to use Global components because Vue js loads them all which could impact performance.
- **Slots**: Slots allow us to receive HTML content from outside the container e.g: as a Wrapper.

## Reactive vs Non-Reactive Frontend
- **Reactive Frontend (Declartive Approach)**:
A reactive frontend is built using a reactive framework, such as Vue.js, React, or Angular. In a reactive frontend, the UI is bound to the data and is automatically updated when the data changes. This means that when the user interacts with the UI, such as by clicking a button or typing in a form, the changes are immediately reflected in the underlying data and the UI is updated accordingly. This makes it easier to build complex and dynamic user interfaces, and can improve the performance and responsiveness of the application.

- **Non-Reactive Frontend (Imperative Approach)**:
A non-reactive frontend is built using traditional HTML, CSS, and JavaScript without a reactive framework. In a non-reactive frontend, the UI and the data are not directly connected, and the UI must be manually updated whenever the data changes. This means that when the user interacts with the UI, such as by clicking a button or typing in a form, the changes are not automatically reflected in the underlying data and the UI must be manually updated. This can make it more difficult to build complex and dynamic user interfaces, and can result in slower performance and less responsive applications.

In summary, a reactive frontend is designed to automatically update the UI in response to changes in the data, while a non-reactive frontend requires manual updates to keep the UI in sync with the data. Reactive frameworks can simplify the development of complex user interfaces and improve performance and responsiveness.

## Vue Js Behind the scenes
- **Proxies**: Vue js wrapping your properties with a javascript feature called Proxies to be notified whenever the value's tracked is changes that makes the Vue Js reactive over the vanilla javascript which is non-reactive. This is related to **Proxy Design Pattern**.
- **Seperation of Concerns**: You could create multiple Vue apps in the same app while each part control specific component in the web app and remains seperated
- **View Controlled Template**: When you mount vue js app to specific html element everything inside this element is considered a template.
- **Vue Instance Lifecycle**: Starting from the app before being created. This has the same relation to **Process Lifecycle** in Operating System in general.
- **Virtual DOM**: Related to the concept of **Virtualization** in Operating System.
- **Event Driven Architecture**: It's all about Events and Event Handlers.
- **Don't Repeat Yourself (DRY)**: That appers in a great way in Vue js components && Mixins as appeared in Options API in Vue Js version 2.
- **Unidrectional data flow && Immutability**: That apperas in props/data properties passed to comoponents which one way of communication
- **Pointers**: Pointers are used heavily in Vue js which is the normal case like any other programming language.
- **Dependency Injection && Dependency Inversion Design Pattern**: DDI && DDV is used heavily in Vue js API where `provide and inject` feature shines.
- **State Management System**

## Client Side Processing vs Server Side Processing
- **Client Side Processing**
Client-side processing involves executing the application logic in the client's browser using Javascript. In this approach, the server sends the raw data to theclient, which then manipulates it and renders it in the browser. In client-side processing, the server is only responsible providing data to the client, and the actual rendering of the HTML markup is done on the client's browser.

- **Server Side Processing**
Server-side processing refers to the process of generating HTML content on the server before sending it to the client's browser. In this approach, the server takes care of rendering the initial view of the application and sends it to the client, which then renders the view in the browser. With server-side processing, the server is responsible executing the application logic, retreiving data from databases or external services, and generating the HTML markup that is sent to the client.

## Single Page vs Multi-page Application
- **Single Page Application**
In a Single Page Application, all of the content is loaded on a single HTML page at the start, and then the application dynamically updates the content of that page as the user interacts with it, without the need for a full page reload, the initial page load typically include all the necessary Javascript, CSS, and HTMl code, and subsequent interactions with the application are handled by making asynchronous requests to the server for data and updating the page dynamically based on response. That means from the user prospective it appears as though they are navigating through different pages of content, even though the content is all part of a single HTML page. This provides a more seamless and responsive user experience particularly for modern web applications that require real-time updates and interactivity which makes it fast. **Component is a fundamental concept in SPA.**

- **Multi-page Application**
In contrast, a Multi-page Application, each user interaction typically results in a request to the server for a new HTML page to be loaded. This can result in slower and less responsive user experiences, particularly for applications that require frequent updates.

## Additional Resources
[Vue js documentation](https://vuejs.org/guide/introduction.html)
