import Login from './page/login/Login';
import Profile from './page/profile/Profile';
import Header from './component/header/Header';
import Achievement from './page/achievement/Achievement';
import './App.css';

function App() {
  return (
    <div className="App">      
      {/* <Login/> */}
      <Header/>
      {/* <Profile/> */}
      <Achievement/>
    </div>
  );
}

export default App;
