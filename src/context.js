// import React, {useContext, useEffect} from 'react'

// const API_URL = `http://www.omdbapi.com/?apikey=727bbdc1&s=titanic`;

// const AppContext = React.createContext();

// // we need to create a provider function
// const AppProvider = ({ children }) => {

//   const getMovies = async (url) => {
//     try{
//       const res = await fetch(url);
//       const data = await res.json()
//       console.log("data",data)

//     }catch(error){
//       console.log(error);
//     }
//   }


//   useEffect(() =>{
//     getMovies(API_URL);
//   }, []);


//   return <AppContext.Provider value="movie">{children}</AppContext.Provider>
// };

// // global custom hooks
// // const useGlobalContext = () =>{
// //   return useContext(AppContext)
// // }


// export default {AppContext, AppProvider};
