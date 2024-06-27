import React from 'react'
import { Route, Routes } from "react-router-dom"
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Login from './Login/Signup/Login'
import Signup from './Login/Signup/Signup'
import Work from './WeProvide/Work'
import Reactjs from './WeProvide/OurWork/Frontend/Reactjs'
import Angular from './WeProvide/OurWork/Frontend/Angular'
import HTML from './WeProvide/OurWork/Frontend/HTML'
import CSS from './WeProvide/OurWork/Frontend/CSS'
import JS from './WeProvide/OurWork/Frontend/JS'
import Java from './WeProvide/OurWork/Backend/Java'
import DOTNET from './WeProvide/OurWork/Backend/DOTNET'
import Springboot from './WeProvide/OurWork/Backend/Springboot'
import ASP from './WeProvide/OurWork/Backend/ASP'
import Frontend from './WeProvide/OurWork/Webdev/Frontend'
import Database from './WeProvide/OurWork/Webdev/Database'
import backend from './WeProvide/OurWork/Webdev/backend'
import Automation from './WeProvide/OurWork/Testing/Automation'
import Manual from './WeProvide/OurWork/Testing/Manual'
import AWS from './WeProvide/OurWork/Cloud/AWS'
import Azure from './WeProvide/OurWork/Cloud/Azure'
import NoPage from './NoPage'
import Oracle from './WeProvide/OurWork/DataBase/Oracle'
import SQL from './WeProvide/OurWork/DataBase/SQL'
import DB2 from './WeProvide/OurWork/DataBase/DB2'

const App = () => {
  return (
    <>
    <Header/>
    <Routes>
        <Route
        path='/'
        Component={Home}
        />
        <Route
        path='/Home'
        Component={Home}
        />
        <Route
        path='/About'
        Component={About}
        />
        <Route
        path='/Contact'
        Component={Contact}
        />
        <Route
        path='Login'
        Component={Login}
        />
        <Route
        path='/Signup'
        Component={Signup}
        />
        <Route
        path='/Work'
        Component={Work}
        />
        <Route
        path='/Reactjs'
        Component={Reactjs}
        />
        <Route
        path='Angular'
        Component={Angular}
        />
        <Route
        path='/HTML'
        Component={HTML}
        />
        <Route
        path='/CSS'
        Component={CSS}
        />
        <Route
        path='/JS'
        Component={JS}
        />
        <Route
        path='/Java'
        Component={Java}
        />
        <Route
        path='DotNet'
        Component={DOTNET}
        />
        <Route
        path='Springboot'
        Component={Springboot}
        />
        <Route
        path='/ASP'
        Component={ASP}
        />
        <Route
        path='/frontend'
        Component={Frontend}
        />
        <Route
        path='/Database'
        Component={Database}
        />
        <Route
        path='/Backend'
        Component={backend}
        />
        <Route
        path='/Automation'
        Component={Automation}
        />
        <Route
        path='/Manual'
        Component={Manual}
        />
        <Route
        path='/AWS'
        Component={AWS}
        />
        <Route
        path='/Azure'
        Component={Azure}
        />
        <Route
        path='/Oracle'
        Component={Oracle}
        />
        <Route
        path='/SQL'
        Component={SQL}
        />
        <Route
        path='/DB2'
        Component={DB2}
        />
        <Route
        path='*'
        Component={NoPage}
        />
    </Routes>
    <Footer/>
    </>
  )
}

export default App