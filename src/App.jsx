
import './App.css';
 import { Route,Routes } from 'react-router-dom';
 import Feed from './components/Feed';
 import Gallery from './components/Gallery';
 import Profile from './components/Profile';
 import Data from './Data'
 import Promotion from './components/Promotion';
 import ScrollToTop from './components/ScrollToTop';
 import Photos from './components/Photos';
 import User from './User';
function App() {
 return (

     <ScrollToTop>
        <Routes>
       
         <Route  path='/galleria' element={<Gallery/>}/> 
         <Route  path='/profile/:id' element={<Profile data={Data}/>}/>
         <Route path='/photos/:id' element={<Photos data={Data}/>}/> 
         <Route path='/feed' element={<Feed data={Data}/>}/>
         <Route path='/promos' element={<Promotion data={Data}/>}/>
          <Route  path='/user' element={<User/>}/>
         
          
          
          
        </Routes>
     </ScrollToTop>
      // <div>
      // <Header/>
      // <Gallery/>
      // <Profile/></div>

 );
}

export default App;
