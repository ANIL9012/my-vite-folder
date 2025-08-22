import React, { forwardRef } from 'react'

// React virson 18 me es tarah se use hota tha ForwordRef


// function UserInput(props,ref) {
//   return (
//     <>
//       <input type="text" ref={ref} />
//     </>
//   )
// }

// export default forwardRef(UserInput)


// React virson 19 me es tarah se use hota tha ForwordRef

function UserInput(props) {
  return (
    <>
      <input type="text" ref={props.ref} />
    </>
  )
}

export default UserInput;
