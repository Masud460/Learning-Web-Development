import React from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GIthub() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // fetch("https://api.github.com/users/hiteshchoudhary")
    //     .then(res => res.json())
    //     .then(data => setData(data))
    return (
        <>
            <div className='bg-gray-500 text-white m-4 p-4 flex flex-col gap-2 justify-center items-center'>
                <h1 className='text-3xl'>Github Followers: { data.followers }</h1>
                <img width={300} src={data.avatar_url} />
            </div>
        </>
  )
}

export default GIthub

export async function apiLoader() {
    const res = await fetch("https://api.github.com/users/hiteshchoudhary")
    return res.json()
}