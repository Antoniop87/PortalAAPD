import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home'
import './dist/output.css'
import Inscricao from './Pages/Inscricao';
import Contato from './Pages/Contato';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Inscricao' element={<Inscricao/>}/>
          <Route path='/Contato' element={<Contato/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
