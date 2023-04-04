import {useEffect, useState} from 'react'
import {Outlet,Link} from 'react-router-dom'
let Home=()=>{
 let [data,setData]=useState([])
 useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>(response.json()))
    .then(data=>{setData(data)
    console.log(data) 
 })
       
        },[])
 
 return( 
  <div className='container'>
  {data.map((value, index) => {
    return(
      
    <div className='b' key={index}>
      <Link to={`/detail/${value.id}`} className='link'>
      <img src={`https://picsum.photos/200?random=${value.id}`} alt='pic' />
      <h4>userId: {value.userId}</h4>
      <h4>id: {value.id}</h4>
      <h4>title: {value.title.slice(0, 20)}</h4>
      <h4>body: {value.body.slice(0, 20)}</h4>
      </Link>
      <Outlet/>
    </div>
    
    )
    })}
</div>
     
 )

}

export default Home