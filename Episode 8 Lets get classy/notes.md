Class Based component

class User extends React.Component{
//
render() {
    return(

    )
}
}
-is a JS class which extends React.Component and returns a piece of JSX
-React.Component is class given by react, which is inherited by UserClass
-must have render method, other methods are optional

Props in Class component:
-passing props from parent is same way as functional

How to receive props in child component?

-using constructor function
constructor(props){
    super(props)
    console.log(props) //{name: ''}
}
Q: Why we always write super(props)?
A: To use this.props inside constructor we must call super(props) inside constructor 
because A class based component extends react.component so by calling super , we are calling the constructor of the react's component class and giving it our props so that our props are initialised with 'this' and we can use our props inside constructor like this.props.

Q: what if we call super but dont pass props?
A: this.props will be undefined

State in class component:

Declaration:
constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
Usage:
this.state.count

Updating the state:

this.setState({count:1}) - updates only the passed state and other states remain the same

Lifecycle of Class component

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ 

Golden rule of react optimisation:

For every component, The mounting phase can further be divided into 2 phases:
a. Render phase
-contructor called
-render called
b. commit phase
-reconcilliation
-DOM manipulation - react updates the DOM, components and their children are mounted together to optimisation
-componentDidMount called

-DOM manipulation is most expensive operation while loading a component on webpage thats why react combines this operation for all its children element and for states updates

1. Mounting Phase

when a class component is rendered <UserClass/>, then,
-first a new instance of that class is created, then the 
-constructor is called then the
-render is called
-reconciliation
-DOM manipulation(Component mounted on the DOM)
-componentDidMount is called

Parent-child Lifecyle: understand the cycle when a parent class components renders a child class component

1.Parent constructor
2.Parent render
3.child constructor
4.child render
5.DOM manipulation (& reconciliation) starts in single batch for all child components
6.DOM manipulation ends
7.child componentDidMount
8.parent componentDidMount 

Q: Why parent componentDidMount is called at the end ?
A: Because the parent's rendering is not finished unless all its children's finishes rendering and their own lifecycle

Lifecycle of Parent and multiple child : A parent class component (P) rendering multiple child component (C1 and C2)

1.P constructor
2.P Render
3.C1 constructor
4.C1 render
5.C2 constructor
6.C2 render
7.DOM manipulation (& reconciliation) starts in single batch for all child component
8.DOM manipulation ends
9.C1 componentDidMount
10.C2 componentDidMount
11.P componentDidMount

Q: Why C1 componentDidMount did not called right after C1 render like in the 1st example ?
A: React will batch(combine) the rendering phase of 2 children for optimisation so that 1st and 2nd child can be mounted on the DOM together and there is no time lag

componentDidMount:
-is called right after the component is mounted on DOM
-is the best place to make API calls on when the component loads the first time on the page

fetch(data)
.then(this.setState())

2. Updating phase

-due to the setState call in componentDidMount, the state variable gets updated and react calls render once again with the updated value of state (re-render the component)
-reconciliation and Dom manipulation happens where the updates are made and displayed on UI
-then componentDidUpdate gets called

componentDidUpdate(prevProps, prevState){
    if(this.state.count !== prevState.count){
        //do something
    }
}
-called every update

Flow:
//Mounting phase
-constructor called
-render called with initial state
-Mounted on DOM
-componentDidMount (API call)
//Updating phase
-setState
-render with new updated state
-DOM updated
-componentDidUpdate

Unmounting Phase:

componentWillUnmount()
-called just before a component is unmounted / destroyed from the DOM/UI or navigating between pages
-so we need to clear lot of things before leaving the page
-clearInterval
