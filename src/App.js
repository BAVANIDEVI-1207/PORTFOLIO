import './App.css';
import Project from './component/Pro';
import { BrowserRouter as BrowserRouter}
    from 'react-router-dom';
    import Home from './component/home';
  function App() {
  return (
    <div>
    <Project/>
   <BrowserRouter>
   <Home/>
   </BrowserRouter>
    </div>

  

  );
}

export default App;
