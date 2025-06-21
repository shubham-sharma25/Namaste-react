Laying the foundation

npm script:
instead of writing npx parcel index.html every time to run our app, we can create a shortcut way by adding this command as a script on package.json
//package.json
"scripts":{
    "start": "parcel index.html"
}
New command to run the app : npm run start / npm start

React with JSX 

Before JSX, it was still possible to create UI in react using core methods like React.createElement and ReactDom.createRoot, but that approach was not developer friendly therefore React owners came up with JSX which is a html-like syntax to create react elements and build UIs
JSX is not html in JS, but its html like syntax

const jsxHeading = <h1>Hello</h1> //creating react element using jsx

Q: Is above code pure JS ?
A: No

Babel

Why babel is needed :
A JS engine in browser doesnt understand JSX syntax , it understand only ecmascript syntax.
Solution : Babel package which is provided by Parcel, transpiles this JSX code into a code which browsers can understand

Transpilation: Converting JSX code to a code which browser JS engine can understand 
the JSX code <h1>Hello</h1> is transpiled to React.createElement('h1', {}, "Hello") which returns a JS object which is rendered on the DOM as a HTMLElement

Some old browsers doesnt understand new ES6 code, so babel transpiles es6 code into pure js code

Q: Difference between JSX and HTML syntax ?

React Components

-In a webpage, every element is a React component (buttons, inputs, lists etc)
-2 types : class & functional

Class based component - old way
Functional component - new way

React Functional component 

- is A normal JS function which returns a piece of JSX/react element
- name should start with capital to make react aware that this is a component
e.g.
const HeadingComponent = () => {
    return <h1>Namaste React Functional component</h1>
}
root.render(<HeadingComponent />)
//this will later be transpiled into React.createElement
-babel understand <> as a component

Component composition : rendering 1 component inside another component

e.g.
const HeadingComponent = () => {
    return (
        <>
        <Title />
        <h1>Namaste React Functional component</h1>
        </>
    )
}

Running JS code inside returned JSX

-using {}

Rendering a react element inside a component

-using {elm} because every react element const elm = <h1>1</h1> is transpiled to React.createElement('h1', {}, "Hello") which returns a JS object so basically here we are rendering JS code only

Rendering react component inside react element:

-using <ComponentName />

Different ways of rendering a react element or component inside another react component:

return (
        <div id="container">
            <Title /> // rendeirng using <>
            <Title></Title>
            {Title()} // rendering using calling since Title component is a JS function
            {jsxHeading} //<h1>Hello</h1>
            {heading1} //React.createElement("h1", { id: "heading" }, "Heading1")
            <h1>Namaste React Functional component</h1>
        </div>
    )
-Everything is Javascript at the end of the day

JSX prevents XSS : Cross Site scripting

Since we can run any piece of JS code within React component using {} , hackers can exploit this.
How ? lets understand with an bad API example:
const data = api.getData() //returning malicious data to hack into user's system
<>{data}</>  // will execute the hackers code into our component which will run on end user's system
and can access a lot of personal information
But JSX will escape these malicious code, like sanitising the data before running it 






