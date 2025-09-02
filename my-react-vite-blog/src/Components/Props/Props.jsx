import React from 'react'

export default function Props({user}) {
  return (
    <>
      <h1>{user.name}{user.age}{user.email}{user.rahul.sonname}{user.rahul.sonemail}</h1>
    </>
  )
}
