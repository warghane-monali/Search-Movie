import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Singlemovie() {
const [items, setItems] = useState("")
const { id } = useParams();

const API_ID = `http://www.omdbapi.com/?apikey=727bbdc1&s=${id}`;

const getData = async(link) =>{
  try{
    const res = await fetch(link);
    const data = await res.json()
    console.log(data)
    setItems(data.Search[0])
  }catch(error){
    console.log(error)
  }
}

useEffect(() =>{
  getData(`${API_ID}&s=${id}`)
}, [id])

return (
   <>
   {!items ? "no item" : (
    <>
    <div className='movie-container'>
      <div className='movie-information'>
        <div className='single-img'>
          <img src={items.Poster} alt={items.imdbID} key={items.imdbID}/>
        </div>
        <div className='movie-details'>
        <h3>Title : {items.Title}</h3>
        <p>Year : {items.Year}</p>
        <p>Type : {items.Type}</p>
      </div>
      </div>
    </div>
    </>
   )}
   
   </>
  )
}

export default Singlemovie
