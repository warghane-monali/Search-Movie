import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom';


function Movies() {
    const [isloading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [isError, setIsError] = useState({show: "false", msg:""})
    const [query, setQuery] = useState("Spider")

    const API_URL = `http://www.omdbapi.com/?apikey=727bbdc1`;

    const getMovies = async (url) => {
        try{
          const res = await fetch(url);
          const data = await res.json()
          console.log("data",data)
          if (data.Response === "True"){
            setIsLoading(true)
            setMovie(data.Search);
          }
          else{
            setIsError({show:true, msg:data.error})
          }
    
        }catch(error){
          console.log(error);
        }
      }
    
        useEffect(() =>{
        // if (query === null){
        //     return data;
        // }else {
        //     return getMovies(`${API_URL}&s=${query}`);
        // }
        getMovies(`${API_URL}&s=${query}`);
        
      }, [query]);

  return (
<>
<div className='main-container'>
  <div className='header-menu'>
  <img src='./images/movie-icon-28.png' alt='Movie Logo' className='movie-img'/>
  <h1>Search Your favorite movies here</h1>
  <input type="text" placeholder="search here" value={query} onChange={(e) =>setQuery(e.target.value)} className='input-field'/>
  </div>
  {/* <hr/> */}
  <div className='card-data'>
  {movie.map((currMovie) =>{
            const { imdbID, Title, Poster} = currMovie;
            return <NavLink to={`${imdbID}`}>
                <div className='card-container'>
                    <div className='card-info'>
                       <h2>{Title}</h2>
                       <img src={Poster} alt={imdbID} key={imdbID}/>
                      </div>
                </div>
            </NavLink>
        })}

  </div>
</div>





{/* <section>
    <h2>Search Your Favorite Movie</h2>
    <form action='#' onSubmit={(e) =>e.preventDefault()}>
        <div>
            <input type="text" placeholder="search here" value={query} onChange={(e) =>setQuery(e.target.value)}/>
        </div>
    </form>
   </section> */}
    {/* <section className="movie-page">
    <div className="grid grid-4-col">
        {movie.map((currMovie) =>{
            const { imdbID, Title, Poster} = currMovie;
            return <NavLink to={`movie/${imdbID}`}>
                <div className='card'>
                    <div className='card-info'>
                       <div className='title'>
                       <h2>{Title}</h2>
                       <img src={Poster} alt={imdbID} key={imdbID}/>
                       </div>
                    </div>
                </div>
            </NavLink>
        })}
    </div>
    </section>   */}
</>
    
  )
}

export default Movies
