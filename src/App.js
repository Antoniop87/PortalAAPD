import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home'
import './dist/output.css'
import Copa from './Pages/Copa';
import Contato from './Pages/Contato';
import Brasileiro from './Pages/Brasileiro'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Copa' element={<Copa/>}/>
          <Route path='/Contato' element={<Contato/>}/>
          <Route path='/Brasileiro' element={<Brasileiro/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
