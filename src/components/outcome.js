import '../App.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getLastBid, getAuctionProps, getContract } from '../redux/selector';
import * as backend from '../build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlogoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);
reach.setWalletFallback(reach.walletFallback({providerEnv: "TestNet", MyAlgoConnect}));

const {standardUnit} = reach;

function Outcome() {
	const [address, setAddress] = useState();
	const [_address, set_Address] = useState();
	const [id, setId] = useState("");
	const [auctionItem, setAuctionItem] = useState("");
	const _fetch = useSelector();

	useEffect(() => {
		const ctc = _fetch(getContract);
		set_Address(await ctc.getAddress());
		const interactInterface = {
			showOwner(id, address, auctionItem) {
	    		setId(id);
	    		setAddress(address);
	    		setAuctionItem(auctionItem);
			}
		};
		backend.Owner(ctc, interactInterface);
	}, []);

	return (
		<div>
			{ !(_address == address) &&
				<h1>The Winner of the Auction is {address}</h1>
				<h1>The Auction was ended at price of {_fetch(getLastBid) standardUnit}</h1>
			}
			{ (_address == address) &&
				<h1>You are the Owner of {id}</h1>
				<img src={auctionItem}/>
			}
		</div>
	);
};

export default Outcome;