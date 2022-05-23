import './App.css';
import Form from './components/Form';
import { Link, Routes, Route } from 'react-router-dom';
import People from './components/People';
import Planets from './components/Planets';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      <Form />
      <hr />
      <Routes>
        <Route path={"/people/:input"} element={<People />}/>

        <Route path={"/"} element={<People />}/> 
          
        <Route path={"/planets/:input"} element={<Planets />}/>
          
        <Route path={"/error"} element={<Error/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
