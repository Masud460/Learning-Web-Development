import {useParams} from 'react-router-dom'
export default function User() {
    const {userId} = useParams()
    return (
        <>
            <h1 className='bg-gray-700 text-white p-4 text-3xl text-center font-bold'>User: { userId }</h1>
        </>
    )
}