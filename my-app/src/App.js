import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import {Routes, Route, useLocation} from 'react-router-dom'
import './styles/style.scss';
import Login from './pages/Login/Login';
import Layaut from './Layout/Layaut';
import NotFound from './pages/NotFound/NotFound';

function App() {
  const {pathname} = useLocation()
  
  
  return (
    <div className="App">

  
        <Routes>
          <Route path='/' element={<Layaut/>}>
            <Route path='' element={<Home/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Route>
          <Route path='/login' element={<Login/>}/>
        </Routes>
    </div>
  );
}

export default App;
