import React, { memo, useReducer } from 'react'
const initialState = { count: 0 };

type ACTIONTYPE = { type: "increment"; payload: number } | { type: "decrement"; payload: number };

function reducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    default:
      throw new Error();
  }
}

const Counter = () => {
    console.log("hello");
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
   <>
     <h4 className='mt-4'>Counter Task</h4>
      <div className='col-5 m-auto d-flex justify-content-center border p-5'>
      
      <span className='rounded-circle pe-3 ps-3 border pt-2 pb-2' onClick={() => dispatch({ type: "decrement", payload: 1 })}>-</span>
      <span className='pe-3 ps-3 mt-1 fs-4'> {state.count}</span>
      <span className='rounded-circle pe-3 ps-3 border pt-2 pb-2' onClick={() => dispatch({ type: "increment", payload: 1 })}>+</span>
    </div>
   </>
  )
}

export default memo( Counter)