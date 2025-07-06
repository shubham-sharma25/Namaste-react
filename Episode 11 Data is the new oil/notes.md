Data is the new oil

Higher order component (HOC)

a HOC is a function which takes a component as argument and returns a newly enhanced component with extra features

Understanding with restaurant example:
Lets make some of our restaurant as sponsored/promoted by adding a Promoted tag/label on its picture

input - restaurant component
output - Restaurant component with promoted label

//HOC 
const withComponent = (MyComponent) => {
    return (props) => {
        //Add some new logic/state/ functionality acc to requirement
        return (
            <div>
            //Add some new/enhanced UI
            <MyComponent {...props}/>
            </div>
        )
    }
}

Using a HOC component:

const MyEnhancedComponent = withComponent(MyComponent)
<MyEnhancedComponent data={data}/>

Benefit of HOC : we dont have to modify the existing component to add our logic

React profiler: 
-this tool comes along with React dev tools extension
-we can record user action like button click, page change etc and profile will show the corresponding React component tree which were updated or loaded during that period
-important for debugging

UnControlled component

-A component which has its own brain (state) and make its own decision using those states
-its called uncontrolled because no other component is controlled it from outside
-UI and state present in same component

Controlled component

-if we lift that state up a level and put it inside parent component and pas the value of state as prop then the same component becomes controlled component 
-because now its behaviour is controlled from outiside via a different component
-it becomes a prsentation component alone

Props drilling
-passing same props from a component to its child component and then again to its child component
-e.g.
//A.js
<B data={'name'}/>
//B.js
<C data={'name'}/>
<D data={'name'}/>
//C.js
<h1>{data}</h1>

Problem : 
-its bad practice, which increases duplication, increases code size
-there is only 1 way of data flow i.e. parent to child
-the components which do not have parent child relationship have no way to pass data and communicate with other

Solution:

React Context

-Provides a global store to keep data and later consume it in any component without passing props
-sometimes we deal with a data which needs to be accessed at any place in our app (in any component), for e.g. 
-we are using user data (customer type flag, user id), inside user-admin mfe and other places as well
-logged in user info
-theme

Creating a context:
should be created in separate folder like utils

import {createContext} from 'react'

const data = { loggedInUser: 'default' }
const UserContext = createContext(data)

Accessing/Consuming the context:

const data = useContext(UserContext)

Updating the Context:

<UserContext.Provider value={newValue}><App/></UserContext.Provider>





