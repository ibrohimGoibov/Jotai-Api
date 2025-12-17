import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const JotaiById = () => {
    const {id} = useParams()
    const [data, setData] = useState({})
    async function getById() {
        try {
            let {data} = await axios.get(`http://localhost:3000/data/${id}`)
            setData(data)
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getById()
    }, [id])
  return (
    <div>
        <div className="flex items-center justify-center flex-col gap-[10px] mt-[50px] border w-[300px] m-auto p-[30px]">
        <h1 className='text-[30px]'>Name: {data.name}</h1>
        <h1 className='text-[20px]'>Age: {data.age}</h1>
        <h1>Status: {data.status ? 'Active' : 'Inactive'}</h1>
        <Link to={'/Jotai'}>
        <button className='bg-green-500 px-[10px] py-[5px]'>Go Back</button>
        </Link>
        </div>
    </div>
  )
}

export default JotaiById