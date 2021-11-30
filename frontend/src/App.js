import React from 'react';
import { Route,Routes } from 'react-router-dom';
import LogIn from "./components/login/login"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Signup from './components/signup/singup';
import Main from './components/main';
import NextMain from './components/main/nextMain';
import Dashboard from './components/dashboard/index'
import Footer from './components/footer';


const App = () => {
	return <div className="App">
		<Header/>
		{/* <LogIn/> */}
	

    <Routes>
		<Route path="/" element={<Main/>}/>
    <Route path="/login" element={<LogIn/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
	<Route path="/login" element={<LogIn/>}></Route>
	<Route path="/nextMain" element={<NextMain/>}></Route>
	<Route path="/Dashboard" element={<Dashboard/>}></Route>
	</Routes>
    <Footer/>
	
	</div>;
};

export default App;
