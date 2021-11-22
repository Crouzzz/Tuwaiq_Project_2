import React from 'react';
import { Route } from 'react-router-dom';
import LogIn from "./components/login/login"
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
	return <div className="App">App component
	<LogIn/>
	</div>;
};

export default App;
