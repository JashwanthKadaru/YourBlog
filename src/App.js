// core react functionality
import logo from './logo.svg'
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'

// Custom project components
import Home from './screens/Home.js'
import NewPost from './screens/NewPost.js'
import PostRead from './screens/PostRead.js'
import YourLibrary from './screens/YourLibrary.js';
import MenuTab from './components/MenuTab.js';
// import { Twirl as Hamburger} from 'hamburger-react';
import { Twirl as Hamburger } from 'hamburger-react'
import { FaYahoo, FaBimobject } from 'react-icons/fa6'

import './App.css'
import LoginPage from './screens/Login';
import ForgotPasswordAuth from './screens/ForgotPasswordAuth';
import SignUpPage from './screens/SignUpPage';


function App() {
  const [searchText, setSearchText] = useState('')
  const [showMenu, setShowMenu] = useState(false)
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <FaYahoo id='y'/> <FaBimobject id='b'/>
          Your Blog
        </h1>

        <p> Welcome, Jashwanth Kadaru</p>
      </header>

      <div className='ham'>
          <Hamburger size={20} onToggle={() => {setShowMenu(!showMenu)}}/>
      </div>

      <MenuTab showMenu={showMenu}/>

      <Routes>
        <Route path='/' element={<Home searchText={searchText} setSearchText={setSearchText} postFeed={[{},{},{},{},{},{},{},{},{},{}]}/>} />
        <Route path='/NewPost' element={<NewPost/>}/>
        <Route path='/PostRead/:pid' element={<PostRead replyList={[{},{},{},{},{},{},{}]}/>}/>
        <Route path='/YourLibrary' element={<YourLibrary postLibList={[{},{},{},{},{},{},{},{},{}]}/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/forgotpassword' element={<ForgotPasswordAuth />}/>
        <Route path='/signup' element={<SignUpPage />}/>
      </Routes>

      <footer>
        <p> Copyright &copy; June 2023 </p>
        <p> Made with &hearts; by Jashwanth Kadaru</p>
      </footer>
    </div>
  );
}

export default App
