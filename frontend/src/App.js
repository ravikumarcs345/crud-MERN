
import './App.css';
import User from './pages/user'
import Form from './pages/form';
import Home from './pages/home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='user' element={<User/>}/>
        <Route path='form' element={<Form/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
