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




