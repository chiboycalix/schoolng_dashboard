/** @format */
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App.jsx';
import ErrorBoundary from './components/HOC/ErrorBoundry.jsx';

// hack the language setting for antd
window.localStorage.setItem('umi_locale', 'en-US');

ReactDOM.render(
	<ErrorBoundary>
		<App />
	</ErrorBoundary>,
	document.getElementById('root')
);
