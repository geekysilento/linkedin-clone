import './App.css';
import Header from "./Header";
import Sidebar from './Sidebar';
import Widgets from './Widgets';
import Feed from './Feed';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser, login } from './features/userSlice';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      } else {
        dispatch(logout());
      }
    })
  }, [])
  return (

    <div className="app">
    <Header />
    {!user ? (
      <Login /> 
    ):(
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    )}
    </div>

  );
}

export default App;
