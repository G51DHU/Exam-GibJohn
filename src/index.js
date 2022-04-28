import React from "react"
import ReactDOM from 'react-dom';
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom"

import NavBar from "./components/nav-bar"
import BackToTop from "./components/back-to-top"
import Footer from "./components/footer"

import ServicesDown from './pages/ServicesDown';
import GetServicesStatus from './pages/ServicesDown/logic.jsx';

import HomePage from "./pages/HomePage"
import StudentLoginRegister from "./pages/StudentLoginRegister";
import TeacherLoginRegister from "./pages/TeacherLoginRegister";

import User from "./pages/User"
import Classes from "./pages/Classes";

function App(){
  const services_status = GetServicesStatus()
  if ((services_status["backend"] === "down") || (services_status["database"] === "down")){
    return(
      <>
        <ServicesDown />
        <Footer />
      </>
    )
  }

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><NavBar /><HomePage /><BackToTop /><Footer /></>} />

        <Route path="/*" element={<><NavBar /><Outlet /><Footer /></>} >
          <Route path="student-login-register" element={<StudentLoginRegister />} />
          <Route path="teacher-login-register" element={<TeacherLoginRegister />} />
          
          <Route path="user/*" element={<User />} />
          <Route path="user/*" element={<Outlet />}>
            <Route path="classes" element={<Classes />} />  
            <Route path="subjects" element={<HomePage />} />  
            <Route path="favourite-topics" element={<HomePage />} />  
            <Route path="assignments" element={<HomePage />} />  
          </Route>        
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
