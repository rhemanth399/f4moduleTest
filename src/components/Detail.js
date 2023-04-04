import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const { id} = useParams() // retrieve id parameter from URL what we enter 
  const [data, setData] = useState([])
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`) // fetching data for specific id
      .then(response => response.json())
      .then(data => {setData(data)
        console.log(data)
      })
      .catch(error=>{console.log('the error',error)})
  }, [id])

  if (!data) {
    return <div>Loading...</div>
  }

 
  return( 
       
       <div className='b'>
        <img src={`https://picsum.photos/200?random=${id}`} alt='pic' />
       <h1>Id:{id}</h1>
       <h1>Title:{data.title}</h1>
       <h1>body:{data.body}</h1>
       </div>
   )
}

export default Detail