React

Q1: Is React a library or a framework ?
A: Library

Q2: What is the difference between a library and a framework ?
A: To build an app, it requires a lot of things. A library provides a solution to a particular problem (Does a particular thing) for e.g., react library provides capability to build single page application . But for a website to function as fully fledged application , it needs lot of other packages or dependencies , it cant work independently on its own . like for routing (react-router-don) and for state management tools like redux, caraousal library
A library Takes minimum effort to integrate with the app.

Q3: Create a basic page using
-plain HTML
-plain HTML & JS
<body><div id='root'></div></body>
<script>
    const heading = document.createElement('h1');
    heading.innerHTML = "Namaste Everyone!";
    const parent = document.getElementById('root')
    parent.appendChild(heading)
</script>
-plain React without jsx
<script>
    //create an element using react
    const heading = React.createElement("h1", {id:'title'}, "Namaste React using CDN"); //returns an object of type react element
    //create a root node
    const root = ReactDOM.createRoot(document.getElementById("root"));
    //render that heading inside the root node
    root.render(heading) //render injects heading element into the dom
</script>
-rendering multiple elements
<script>
    const heading1 = React.createElement("h1", {id:'title1'}, "Heading 1"); //h1 tag
    const heading2 = React.createElement("h2", {id:'title2'}, "Heading 2"); //h2 tag
    //create div tag and pass h1, h2 as children
    const container = React.createElement("div", {id: 'container'}, [heading1, heading2])
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(container)
</script>

Q4: Difference between react and reactDOM ?
A : React is the core library whereas reactDOM is library to access & update the dom

Q5: React without JSX ?
A: yes

Q6: Is it possible to create more than 1 root ?
A: yes 
<script>
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading)
    const root2 = ReactDOM.createRoot(document.getElementById("root2"));
    root2.render(heading)
</script>

Q7: is it possible to use react to certain part of the app and not in the entire app ?
A: yes, in below example react is not used inside header and footer but only in root
<body>
    <div id="header">header</div>
    <div id="root"></div>
    <div id="footer">footer</div>
</body>

Q8: Does react renders UI instantly or there is any delay ? 

A: there is minute delay, If lets say the root div initial consists of children element before doing root.render(element) , what will be the end result?
The existing children will be overridden by the injected element. But momentarily the original children element will be displayed on screen but they will soon be overridden by the injected element.
The reason why they are displayed for a moment is because browser would read the index.html file from top 1 by 1 and comes across the script tag to include the react and react-dom lib and starts downloading those scripts (can be seen in network call) which takes some time which causes this delay.

 If lets say there is some error while injecting the element then original children will persist and displayed which will indicate some issue with the rendering. Therefore its a good practice to add an indicating statement inside the root div as a fallback during error.

Q9: async vs defer ?
A: The browser reads the html from top to bottom and parses it. When it sees script tag, it stops reading html and starts downloading the script, which causes delay at end user system. Therefore to prevent this delay we have 2 methods-
async: tells the browser to download script in parallel while parsing the html, then execute the script immediately after download
defer: tells the browser to download script in parallel while parsing the html, but execute only after the html is fully parsed


Q11: What is JSX ? difference between writing react without JSX and with JSX
A: Earlier React element was created using actual API provided by react and react dom like react.createElement and reactDom.createRoot and render function which was a painful & complicated process and will result in thousands lines of code just for small functionality. 
Solution: JSX 

Q12: How to import JS & css in html file ?
A:  <script src='path'><script>
    <link rel="stylesheet" href="index.css"/>