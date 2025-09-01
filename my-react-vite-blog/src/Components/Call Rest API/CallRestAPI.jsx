import React from 'react'

import {use} from 'react'

function CallRestAPI({userResource}) {
    const userData = use(userResource);
    console.log(userData.users)

  return (
    <>
      <div>
        <h1 style={{margin:"10px 0px"}}>Call Rest API</h1>
        {
            userData?.users?.map((user, uniq)=>(
                <h1 key={uniq}>{user.firstName}</h1>
            ))
        }
      </div>
    </>
  )
}

export default CallRestAPI
