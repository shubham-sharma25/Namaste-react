import React from "react";
import ReactDOM from "react-dom/client";

// const heading1 = React.createElement("h1", {id:'title1'}, "Heading 1");
// const heading2 = React.createElement("h2", {id:'title2'}, "Heading 2");
// const container = React.createElement("div", {id: 'container'}, [heading1, heading2])
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container)

const heading1 = React.createElement("h1", { id: "heading" }, "Heading1")
const jsxHeading = <h1>Hello</h1>
const Title = () => {
    return (
        <h1>
            namaste React using JSX
        </h1>
    )
}
const HeadingComponent = () => {
    return (
        <div id="container">
            <Title />
            {jsxHeading}
            {heading1}
            <h1>Namaste React Functional component</h1>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<HeadingComponent />)
