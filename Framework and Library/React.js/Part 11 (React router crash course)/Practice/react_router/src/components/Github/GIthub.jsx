import React from 'react'
import { useState } from 'react'

function GIthub() {
    const [data, setData] = useState([])
    fetch("https://api.github.com/users/hiteshchoudhary")
        .then(res => res.json())
        .then(data => setData(data))
    return (
        <>
            <div>
                <h1>Github Followers: { data.followers }</h1>
                <img src={data.avatar_url} />
            </div>
        </>
  )
}

export default GIthub