import './App.css'
import React, { useContext } from 'react';
//components
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
//pages
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Forgot from './pages/forgot/Forgot';
import Reset from './pages/reset/Reset';
import ConfirmUser from './pages/confirmuser/ConfirmUser';
import LoggedOut from './pages/loggedout/LoggedOut';
import Roadmap from './pages/Roadmap/Roadmap';
import Dashboard from './pages/Dashboard/Dashboard';
import Tasks from './pages/Task/Tasks';
import Requirements from './pages/Requirements/Requirements';
import Application from './pages/Application/Application';
import Interview from './pages/Interview/Interview';
import Mockinterview from './pages/Mockinterview/Mockinterview';
import Certificate from './pages/Certificate/Certificate';
import Syllabus from './pages/Syllabus/Syllabus';
import Leaderboard from './pages/Leaderboard/Leaderboard';
import Portfolio from './components/Portfolio/Portfolio';
import Webcode from './components/webcode/Webcode';
import Capstone from './pages/capstone/Capstone';
import Queries from './pages/Queries/Queries';
import Leave from './pages/Leave/Leave';
import DataContext from './context/DataContext';
import Profile from './components/profile/Profile';
import { ToastContainer } from 'react-toastify';



function App() {
  const { loggedUser } = useContext(DataContext);

  return (
    <>
      <ToastContainer/>
      {
        loggedUser  &&  !loggedUser.isMentor &&
        <>
          <Header />
          <Navbar />
        

        </>
      }



      {/* without login student routes */}
      <Routes>
        {
          !loggedUser &&
          
          <>
            
            <Route path='/' element={<Login />} />
            <Route path='/forgot' element={<Forgot />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/reset/:id' element={<Reset />} />
            <Route path='/confirm/:id' element={<ConfirmUser />} />
            <Route path='/*' element={<LoggedOut />} />

          </>
        }

        {
         loggedUser && 
           <>
              <Route path='/' element={<Roadmap />} />
              <Route path='/class' element={<Roadmap />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/task' element={<Tasks />} />
              <Route path='/requirements' element={<Requirements />} />
              <Route path='/application' element={<Application />} />
              <Route path='/interviewtasks' element={<Interview />} />
              <Route path='/mock' element={<Mockinterview />} />
              <Route path='/certificate' element={<Certificate />} />
              <Route path='/syllabus' element={<Syllabus />} />
              <Route path='/learderboard' element={<Leaderboard />} />
              <Route path='/portfolio' element={<Portfolio />} />
              <Route path='/webcode' element={<Webcode />} />
              <Route path='/capstone' element={<Capstone />} />
              <Route path='/queries' element={<Queries />} />
              <Route path='/leave' element={<Leave />} />
              <Route path='/profile' element={<Profile />} />
           

          
          </>
        }









      </Routes>
    </>
  )
}

export default App
