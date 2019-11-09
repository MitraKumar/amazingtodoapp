import React, {createContext, useContext, useReducer, useEffect } from 'react';

import db from '../firebase'

const reducer = (state, action) => {
  switch (action.type) {

    case "initialize-data":
      return { todos: action.payload }

    case "toggle-complete":
      db.collection('todos').doc(action.payload).get()
        .then(document => {
          db.collection('todos').doc(action.payload).update({completed: !document.data().completed})
        })
      return state

    case "add":
      db.collection('todos').add({ name: action.payload, completed: false, createdAt: Date.now() });
      return state

    case "delete":
      db.collection('todos').doc(action.payload).delete();
      return state

    default:
      return state
  }
};


export const TodoContext = createContext();
export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { todos: [] })

  useEffect(() => {
    const unsubscribe = db.collection('todos').orderBy("createdAt").onSnapshot(snapshot => {
      dispatch({ type: "initialize-data", payload: snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})) });
    });

    return () => unsubscribe()
  }, [])

  
  
  return (
    <TodoContext.Provider value={[state, dispatch]}>
      {children}
    </TodoContext.Provider>
  )
}
export const useTodoValue = () => useContext(TodoContext);