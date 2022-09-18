
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import LandingPage from './screens/LandingPage/LandingPage';
import {Route,Routes} from "react-router-dom";
import MyMeeting from './screens/MyMeeting/MyMeeting';

const App=()=>(
  <>
    <Header/>
    <main>
    <Routes>
      <Route path='/' element={<LandingPage/>}></Route>
      <Route path='/mymeeting' element={<MyMeeting/>}></Route>
    </Routes>
    </main>
    <Footer/>
  </>
);
export default App;
