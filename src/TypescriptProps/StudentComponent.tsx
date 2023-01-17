import React, { memo } from 'react'
type studentProps={
    name:string
    age:number,
    quilified:true,
    gender:"male"|"female"
}
const StudentComponent = (props:studentProps) => {
  return (
    <div className='col-5 m-auto border p-4 mt-3'>
      <p> Name:{props.name}</p> 
      <p>   Age:{props.age}</p>
     <p> Qualified {props.quilified?<p>Your are Qualified</p>:<p>Your are not Qualified</p>}</p>
     <p>Gender:{props.gender}</p>
    </div>
  )
}

export default memo( StudentComponent)
