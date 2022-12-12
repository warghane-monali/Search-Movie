import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Movies from './Movies';
import Singlemovie from './Singlemovie';
import {AppProvider} from './context'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Movies/>}/>
        <Route path='/:id' element={<Singlemovie/>}/>
    </Routes>
    </BrowserRouter>
  
  )
}

export default App;
