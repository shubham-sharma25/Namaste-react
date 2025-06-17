Decision to choose React over other frameworks and library:

why use library and framework instead of plain html css and JS?
-better developer exp with less code and more feature
-optimised app,
-fast rendering

Code organisation/folder structure
-src
-.js vs .jsx ? no difference, we can use anything
-use export default only once in a file
-file importing :-> './Header' is same as './Header.js'

default export vs named export 

-you use named export when there are multiple things to export 
-can use both default and named exports together in a file
-can have only 1 default export but can have multiple named exports
Q: can a same thing be xported as default and named ?
A: works fine

State

Why we need state ? 

React automatically updates the UI (re-renders) when the data is changed. For this feature , react provides a special variable called as state which can be achieved in normal JS variable.

How to use state in react component ?

using Hooks -> useState Hook

Hooks

-a hook is a normal JS function present inside react library
Types of hooks:
-useState - to create state variable to track data updates in component
-returns an array of 2 elements, i.e., the current value of the state and a updating method
whenever a state variable changes, react will re-render the component

-useEffect

