import React, { Component } from 'react';

//import provider and createStore
import { Provider } from 'react-redux'; 
import { createStore ,combineReducers} from 'redux'

import HomeScreen from './Homescreen'


//book reducer
function books(state=[],action){
  console.log(action)
  switch(action.type){
    case "ADD_BOOK":
      return [...state,action.payload]
    case "REMOVE_BOOK":
      //Create a copy of existing state
      let newState = state.filter(book=>{
        return book.title !== action.payload
        })
      console.log(newState)              
      return newState
    default: 
      return state
  }
}
const rootReducer = combineReducers({
  books
})
//create store using provide to the root of the project
class App extends Component {
  render() {
    return (
      <Provider store={createStore(rootReducer)}>
        <HomeScreen />
      </Provider>
    );
  }
}

export default App;
