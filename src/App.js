import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home'
import './dist/output.css'
import Contato from './Pages/Contato';
import Noticia1 from './Pages/Noticia1'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Contato' element={<Contato/>}/>
          <Route path='/Noticia1' element={<Noticia1/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
