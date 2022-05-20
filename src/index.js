import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import App from './App';
import FundAccount from './components/fund';
import Role from './components/role'
import Auctioneer from './components/auctioneer';
import Auction from './components/auction';
import Outcome from './components/outcome';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
	  <Provider store={store}>
	  	<Router>
	  		<Routes>
	  			<Route path="/" element={<App/>}>
		  			<Route path="fund" element={<FundAccount/>}/>
		  			<Route path="role" element={<Role/>}/>
		  			<Route path="auctioneer" element={<Auctioneer/>}>
		  				<Route path=":role" element={<Auctioneer/>}/>
		  			</Route>
		  			<Route path="auction" element={<Auction/>}>
		  				<Route path=":role" element={<Auction/>}/>
		  			</Route>
		  			<Route path="outcome" element={<Outcome/>}/>
	  			</Route>
	  		</Routes>
	  	</Router>
	  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
