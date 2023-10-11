
import './App.css';
import Corps from "./composantes/Corps" 
import {Routes,Route} from "react-router-dom" 

function App(){

  return(
  <div className="App">
   <Routes>
    <Route path='/' element={<Corps/>}/>
   </Routes>    
  </div>  
  )
  }  
  export default App;