import {HashRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import StoreProvider from './store/StoreProvider';
import Header from './components/header/Header';
import UserCourses from './components/userCourses/UserCourses';
import Homepage from './components/homepage/Homepage';
import LoginPage from './components/LoginPage/LoginPage';

import Footer from './components/Footer/Footer';

function App() {
  
  return (
    <StoreProvider>
    <HashRouter> 
    
    <div className="App">
      <Header/>
      
      <Routes>
      <Route exact path="/" element={<Homepage/>} />
      <Route path="/loginpage" element={<LoginPage/>} />
      <Route path="/userCourses" element={<UserCourses/>} />
    </Routes>
    
      <Footer/>
    </div>
    </HashRouter>
    </StoreProvider>
  );
}

export default App;
