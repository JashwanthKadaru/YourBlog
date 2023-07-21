// core react functionality
import logo from './logo.svg'
import { useState } from 'react';

// Custom project components
import Home from './screens/Home.js'
import NewPost from './screens/NewPost.js'
import PostRead from './screens/PostRead.js'
import YourLibrary from './screens/YourLibrary.js';
import MenuTab from './components/MenuTab.js';
import './App.css'


function App() {
  const [searchText, setSearchText] = useState('')

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Your Blog
        </h1>

        <p> Welcome, Jashwanth Kadaru</p>
      </header>

      <MenuTab/>
      <Home searchText={searchText} setSearchText={setSearchText} postFeed={[{},]}/>
      {/* <NewPost/> */}
      {/* <PostRead replyList={[{},{},{},{},{},{},{}]}/> */}
      {/* <YourLibrary postLibList={[{},{},{},{},{},{},{},{},{}]}/> */}

      <footer>
        <p> Copyright &copy; June 2023 </p>
        <p> Made with &hearts; by Jashwanth Kadaru</p>
      </footer>
    </div>
  );
}

export default App
