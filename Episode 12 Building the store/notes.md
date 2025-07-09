Adding items to Cart

Redux
-used for state management in the app.

Q: Does an application always need redux?
A: No, redux is not mandatory , we may create small or medium size applications without ever using redux but we may require redux large applications

-alternate of redux : zustand

React-redux: library which acts as a bridge between react and redux 

Redux toolkit

-new & simpler way of writing redux

Why redux toolkit instead of legacy redux architecture? 
A: because of following issues in legacy redux :
-Complexity of integrating the app with redux
-dependency on external packages
-too much boiler plate

Redux Store:

A big JS object kept in a central place, consisting of the various key values pairs, indicating the complete state/data of our application
This object can be understood as a collection of many slices to keep data separate (logical partition)
e.g. in our app, a restauarant data is a standalone piece of info and can be understood as a slice
similarly we can a user slice, cart slice etc 

IMPORTANT: Any component can access this store but it cant update the store directly

Q: How to update store ? (how to update cart on click on add button on any item)
A: by dispatching an action, 
Flow:
onClick of Add to cart => An action is dispatched => then A function is called which modifies the store/data

onClick => dispatch(action) => reducer fn updates a part of the store => selector gives the data to component

When the button is clicked, an action will be dispatched, which will trigger a reducer function which internaly updates the store

How to read the store data

-using Selector

A selector gives us access to the store data and it subscribes to the store , meaning is in-sync with store data, so that when store data changes, the selector will automatically send the updated data to the component

Step by Step implementation:

1. Installation
- install @reduxjs/toolkit and react-redux

2. Building the store

-configureStore function comes from redux because its a common utlity across frameworks and libraryt
import {configureStore} from '@reduxjs/toolkit'
const store = configureStore({
    reducer: { //Complete App's reducer
        cart: cartReducer
        <...other reducers>
    }
}) //will create an empty store

3. Connect App with the store

-using Provider, which comes from react-redux because we are providing our store to a react component

import {Provider} from 'react-redux'
import store
<Provider store={store}>
<App/>
</Provider>

4. Create slices for the store

import {createSlice} from '@reduxjs/toolkit'
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducer: {
        addItems: (state, action) => {
            state.cartItems.push(action.payload)
        },
        <...remaining reducers>
    }
})
const {actions, reducer} = cartSlice
export const { addItems, ...} = actions
export default reducer

Q: Why you cant assign new value to state like state.item = []
A: 


5. dispatch action

import {useDispatch} from 'react-redux'
const dispatch = usedispatch()
const handleClick = () => {
    dispatch(addItem('Pizza'))
}

Final store: cartItems: ['Pizza']

6. Reading the data through selector
- A selector is a hook given by react-redux, which subscribes to the App store

import {useSelector} from 'react-redux'
//subscriving to store and telling it that we only want items
const cart = useSelector((store) => store.cart.cartItems)
//cart has the value of the cartItems state of the app
