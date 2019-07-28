// REACT
import React from 'react';
import { render } from 'react-dom';
// Components
import Connexion from './components/Connexion.js';
import App from './components/App.js';
import NotFound from './components/NotFound.js'
// Rooter
import { BrowserRouter, Match, Miss } from 'react-router'; // Les possibilités de routage, si ca match, si ca match pas 
// CSS
import './index.css';

const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={Connexion} />
				<Match pattern="/pseudo/:pseudo" component={App} />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
	)
}

render(
	<Root />,
	document.getElementById('root')
);