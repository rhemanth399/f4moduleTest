import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Detail from './components/Detail'
import './style.css'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='Detail/:id' element={<Detail/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
