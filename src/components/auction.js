import '../App.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getContract, getAuctionProps } from '../redux/selector';
import { updateLastBid } from '../redux/slice';
import * as backend from '../build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlogoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);
reach.setWalletFallback(reach.walletFallback({providerEnv: "TestNet", MyAlgoConnect}));

const {standardUnit} = reach;

function Auction() {
	const [bid, setBid] = useState();
	const [creator, setCreator] = useState(false);
	const [bidder, setBidder] = useState(false);
	const [currentPrice, setCurrentPrice] = useState();
	const navigate = useNavigate();
	const params = useParams();
	const dispatch = useDispatch();
	const _fetch = useSelector();

	useEffect(() => {
		if(params.role == "bidder") {
			setBidder(true);
			const ctc = _fetch(getContract);
			const interactInterface = {
				getBid(c_price) {
					setCurrentPrice(c_price);
				}
			};
			backend.Owner(ctc, interactInterface);
		} else if(params.role == "creator") {
			setCreator(true);
			const ctc = _fetch(getContract);
			const interactInterface = {
				getBid(c_price) {
					setCurrentPrice(c_price);
				}
			};
			backend.Creator(ctc, interactInterface);
		};
	}, []);

	const placeBid = (e) => {
		e.preventDefault;
		setCurrentPrice(bid);
		const ctc = _fetch(getContract);
		const interactInterface = {
			getBid(c_price) {
				setCurrentPrice(c_price);
				return bid;
			}
		};
		backend.Owner(ctc, interactInterface);
	};
	const timer = (millisecs) => {
		setTimeout((minutes = 0, seconds = 0) => {
			seconds += 1;
			if(seconds == 60) { minutes += 1 };
			if(millisecs / 60000 == _fetch(getAuctionProps.timeout)) { 
				dispatch(updateLastBid(currentPrice));
				navigate("/outcome") 
			};
			return { minutes, seconds };
		}, 1000);
	};

	return (
		<div>
			<h1>The Current Price is {currentPrice}</h1>
			{params.role == "bidder" &&
				<div>
					<input type="text" onChange={(e) => setBid(e.target.value)} placeholder="Place your Bid"/>
					<button onClick={placeBid}>Bid</button>
				</div>
			}
			{(params.role == "creator" || params.role == "bidder") &&
				<h1>{timer(_fetch(getAuctionProps.timeout)).minutes} : {timer(_fetch(getAuctionProps.timeout)).seconds}</h1>	
			}
		<div/>
	);
};

export default Auction;