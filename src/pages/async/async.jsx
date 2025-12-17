import { useAtom } from 'jotai'
import { animeAtom, getTodoAtom, dataAtom, deleteAtom, addAtom, editAtom } from '../../atom/atom'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Jotai = () => {
  const [anime, setAnime] = useAtom(animeAtom)
  const [,getTodo] = useAtom(getTodoAtom)
  const [,deleteTodo] = useAtom(deleteAtom)
  const [data] = useAtom(dataAtom)
  const [,addTodo] = useAtom(addAtom);
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [editName, setEditName] = useState('')
  const [editAge, setEditAge] = useState('')
  const [,editTodo] = useAtom(editAtom);
  
  useEffect(() => {
    getTodo()
  }, [])
  
  return (
    <>
      <ul>
        {anime.map((item) => (
          <li key={item.title}>{item.title}</li>
        ))}
      </ul>
      <button onClick={() => {
        setAnime((anime) => [
          ...anime,
          {
            title: 'Cowboy Bebop',
            year: 1998,
            watched: false
          }
        ])
      }}>
        Add Cowboy Bebop
      </button>
      <div className="flex items-center gap-[10px] flex-col justify-center">
      <input type="text" className='border px-[20px] py-[10px]' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" className='border px-[20px] py-[10px]' placeholder='Age' value={age} onChange={(e) => setAge(e.target.value)} />
      <button className='px-[20px] py-[10px] ' onClick={() => addTodo({ name, age })}>Add</button>
      </div>
      <div className="flex items-center flex-col gap-[10px] justify-center">
      <input type="text" className='border px-[20px] py-[10px]' placeholder='Edit Name' value={editName} onChange={(e) => setEditName(e.target.value)} />
      <input type="text" className='border px-[20px] py-[10px]' placeholder='Edit Age' value={editAge} onChange={(e) => setEditAge(e.target.value)} />
      <button>Edit</button>
      </div>
      <div className="flex items-center flex-wrap justify-evenly">
      {data.map((e) => {
        return (
          <div>
            <div className="border w-[200px] p-[20px] ">
            <h1>{e.name}</h1>
            <h2>{e.status ? 'true' :  'false'}</h2>
            <h3>{e.age}</h3>
            <div className="flex items-center gap-[5px]">

            <Link className='bg-amber-500' to={`/JotaiById/${e.id}`}>
            info
            </Link>
            <button className='bg-blue-500' onClick={() => {
              setEditName(e.name)
              setEditAge(e.age)
              editTodo(e.id, { name: editName, age: editAge })
            }}>Edit</button>
            <button className='bg-red-600' onClick={() => deleteTodo(e.id)}>Delete</button>
            </div>
              </div>
          </div>
        )
      })}
      </div>
    </>
  )
}
export default Jotai