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
whenever a state variable changes, react will re-render the component and update the UI
-if you inspect on the app, you will see the exact section of HTML element which is updated

DOM :

Document object modal is a HTML tree structure of our application and can be found under the element tab on inspecting the app

Virtual Dom , reconcilliation (react fibre), diffing , react behind the scenes:

-when a component is rendered for the very first time, then react creates a virtual DOM which is only a representation of real dom. as a JS object
-when there is a state or data update in the component, then react create another virtual DOM with the updated data.
-then react compares previous virtual DOM with updated virtual DOM and find out the difference (called as diffing)
-after finding the difference , react updates only the changed part in the real DOM with minimum operations (reconcilliation)
-React fibre is the new algorithm of finding the diff and updating the real dom which came with react 16 
-when you console.log (<Component>) , it prints a JS object which is virtual dom
