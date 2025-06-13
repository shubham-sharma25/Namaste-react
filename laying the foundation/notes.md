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


