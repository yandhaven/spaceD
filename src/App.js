import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileInfo/profileContainer';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
// import LoginArea from './components/login/login';


function App() {

  return (

    <div className='app-wrapper'>
      <Header />
      <Navbar />
      {/* <LoginArea/> */}

      <div className='app-wrapper-content'>
        <Route path="/profile/:userid" render={() => <ProfileContainer />} />
        <Route path="/messages" render={() => <DialogsContainer  />} />
        <Route path="/users" render={() => <UsersContainer  />} />
      </div>

    </div>

  );
}

export default App;
