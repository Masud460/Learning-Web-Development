import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams()
  return (
      <>
          <h1 className='text-3xl bg-gray-700 text-white p-4 m-4 text-center'>User: { id }</h1>
      </>
  )
}

export default User