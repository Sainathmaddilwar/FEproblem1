
import './App.css';
import Home from "./pages/Home";
import Result from './pages/Result';
// import Dashboard from './components/Dashboard';
import {Routes,Route} from "react-router-dom";
import Introduction from './pages/Introduction';
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Introduction/>}/>
      <Route path = "/home" element= {<Home/>}/>
      <Route path = "/result" element= {<Result/>}/>
     </Routes>
    </div>
  );
}

export default App;
