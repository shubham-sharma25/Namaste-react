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



