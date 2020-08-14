1. What problem does the context API help solve?

The introduction of reacts Context API allows you to no longer have to pass props down from component to component. Instead, you can now store data on a context object and retrieve that data in the necessary components from the context object, not props.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? 
Why is the store known as a 'single source of truth' in a redux application?

A store holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action on it. Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. Reducers specify how the application's state changes in response to actions sent to the store.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global and component state is local. If you wanted to effect state at a global level, application is best. If you wanted to effect state at a local level, component would be best. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed.


1. What is your favorite state management system you've learned and this sprint? Please explain why!

My favorite state management systems used during the sprint were actions. They really allowed me to streamline event-writing process for my application in a much more efficient and easy to read way.