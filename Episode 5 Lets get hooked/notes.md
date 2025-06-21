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

Why we need state ? when to use state and when to use normal JS varaible 

When we have a data in our component which needs to be updated by any user action then,
If we use normal JS variable to store that data , then after user action, the variable gets updated but the component doesnt re-render and UI still shows old data
Therefore React gave state variable for such dynamic data
When we update a state variable then react automatically re-renders are component and UI displays the updated data
-the whole component gets re-render but only the changed part of component will be repainted on the UI

When NOT to use state ?
-We shouldnt use state when data is static or doesnt changes in the component

How to use state in react component ?

using Hooks -> useState Hook

Hooks

-a hook is a normal JS function present inside react library which gives us access to react features like using states 

Types of hooks:
-useState - to create state variable to track data updates in component
-returns an array of 2 elements, i.e., the current value of the state and a updating method
whenever a state variable changes, react will re-render the component and update the UI
-if you inspect on the app, you will see the exact section of HTML element which is updated
-a setState call causes the component to re-render

Q: given a state variable const [A, setA] = useState(0), then how setState is able to update a const variable A?
A: When setState happens, React will render the component with the new value of state, therefore the existing const variable is never changed

DOM :

Document object modal is a HTML tree structure of our application and can be found under the element tab on inspecting the app

Virtual Dom , reconcilliation (react fibre), diffing , react behind the scenes:

-when a component is rendered for the very first time, then react creates a virtual DOM which is only a representation of real dom. as a JS object
-when there is a state or data update (setState) in the component, then react will trigger its reconcilliation cycle and create another virtual DOM with the updated data.
-then react compares previous virtual DOM with updated virtual DOM and find out the difference (called as diffing)
-after finding the difference , react updates only the changed part in the real DOM with minimum operations (reconcilliation)
-React fibre is the new algorithm of finding the diff and updating the real dom which came with react 16 
-when you console.log (<Component>) , it prints a JS object which is virtual dom
