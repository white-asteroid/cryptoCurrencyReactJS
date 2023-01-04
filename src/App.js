// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom'
import Homepage from './pages/Homepage';
import Coinpage from './pages/coinpage';
import Header from './components/home/Header';
// import {makeStyles} from  "@mui/material";
import Banner from './components/home/Banner';
import Coinstable from './components/CoinsTable';
function App() {
  return (

   <Router>
    <Header/>
     <Routes >
     <Route path='/' element={<Homepage/>} exact />
     <Route path='/coins/:id' element= {<Coinpage/>} />
     </Routes>
      
   </Router>
//   <Router>
//   <Header />
//   <Routes>
//     <Route path='/' element = {<Homepage />} />
//     <Route path='coins' element = {<Coinpage />} />
//   </Routes>
// </Router>
  );
}

export default App;
