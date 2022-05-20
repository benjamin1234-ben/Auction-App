import '../App.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAccount } from '../redux/selector';
import { updateContract, updateAuctionProps, updateAddress } from '../redux/slice';
import * as backend from '../build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlogoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);
reach.setWalletFallback(reach.walletFallback({providerEnv: "TestNet", MyAlgoConnect}));

const {standardUnit} = reach;
const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

function Auctioneer() {
	const [creator, setCreator] = useState(false);
	const [bidder, setBidder] = useState(false);
	const [waiting, setwaiting] = useState(false);
	const [viewContract, setViewContract] = useState(false);
	const [init, setInit] = useState(false);
	const [auctionProps, setAuctionProps] = useState({});
	const [id, setId] = useState("");
	const [auctionItem, setAuctionItem] = useState("");
	const [owner, setOwner] = useState({});
	const [_address, set_Address] = useState();
	const [ctc, setCtc] = useState();
	const [ctcInfoStr, setCtcInfoStr] = useState();
	const [preview, setPreview] = useState(false);
	const dispatch = useDispatch();
	const _fetch = useSelector();
	const navigate = useNavigate();
	const params = useParams();

    useEffect((ctcInfoStr) => {
    	if(!ctcInfoStr && params.role == "creator") {
    		setCreator(true);
    		setInit(true);
    		const account = _fetch(getAccount.acc);
	    	setCtc(account.contract(backend));
	    	setCtcInfoStr(JSON.stringify(await ctc.getInfo(), null, 2));
	    	set_Address(await ctc.getAddress());
	    	dispatch(updateContract(ctc));
	    	dispatch(updateAddress(_address));
    	} else if(ctcInfoStr || params.role == "bidder") {
    		setBidder(true);
    		const account = _fetch(getAccount.acc);
    		if(ctcInfoStr) {
    			setCtc(account.contract(backend, JSON.parse(ctcInfoStr)));
	    		set_Address(await ctc.getAddress());
		    	dispatch(updateContract(ctc));
		    	dispatch(updateAddress(_address));

	    		const interactInterface = {
	    			showAuctionProps(startingBid, timeout) {
	    				setAuctionProps({startingBid, timeout});
	    				dispatch(updateAuctionProps(auctionProps));
	    			},
	    			showOwner(id, address, auctionItem) {
	    				setId(id);
	    				setAuctionItem(auctionItem);
	    				dispatch(updateOwner(id, address, auctionItem));
	    			}
	    		};
	    		backend.Owner(ctc, interactInterface);
    		};
    	};
    }, [ctcInfoStr]);

    const initAuctionProps = async(e) => {
    	e.preventDefault();
    	dispatch(updateAuctionProps(auctionProps));
    	dispatch(updateOwner({id, _address, auctionItem}));
    	const interactInterface = {
    		getId() {
    			return id;
    		},
    		getAuctionProps() {
    			return auctionProps;
    		},
    		getAuctionItem() {
    			return auctionItem;
    		}
    	};
    	backend.Creator(ctc, interactInterface);
    	setPreview(true);
    	await sleep(1000);
    	setViewContract(true);
    	setInit(false);
    };
    const copy = async(e) => {
    	e.preventDefault();
    	navigator.clipboard.writeText(ctcInfoStr);
    	e.target.innerHTML = 'Copied!';
    	e.target.disabled = true;
    	await sleep(1000);
    	e.target.disabled = true;
    	e.target.innerHTML = 'Copy';
    	setCreator(false);
    	setwaiting(true);
    	await sleep(10000);
    	if(timeout == false && params.role == "creator") { navigate("/auction/creator"); };
    };
    const acceptTerms = (e) => {
    	e.preventDefault();
    	if(timeout == false && params.role == "bidder") { navigate("/auction/bidder"); };
    };
    const handleFile = (e) => {
    	e.preventDefault();
    	const file = e.target.files[0];
    	const reader = new FileReader();

    	reader.onload = () => {
    		setAuctionItem(reader.readAsDataUrl(file));
    	};
    };
    const viewAuctionProps = () => {
    	if(ctcInfoStr && params.role == "bidder") {
			<h1>These are the Auction Props</h1>
			<h1>Owner : {address}</h1>
			<h1>Starting Bid : {startingBid standardUnit}</h1>
			<h1>Time Duration : {timeout}</h1>
			<h1>Auction Item : {id}</h1>
		} else if(!ctcInfoStr && params.role == "bidder") {
			<h1>Attach the Contract to see the Auction Props</h1>
		}
    };

	return (
		<div>
			{creator && 
				<div className="asker">
					{viewContract &&
					 <h1>Copy the Contract Info below and give it to your opponent</h1>
					 <div className="">
						{ctcInfoStr}
					 </div>
					 <div className="copy_button">
						<button className="" onClick={copy}>Copy</button>
					 </div>
					}
					{init && 
					 <div className="">
						<h1>Please Initialize the Auction Props</h1>
						<div className="">
							<input value={} placeholder="Id / Name of auction Item" onChange={(e) => setId(e.currentTarget.value)} type="text"/>
							<input value={} placeholder="Starting Bid" onChange={(e) => setAuctionProps({startingBid : e.currentTarget.value})} type="text"/>
							<input value={} placeholder="Time Duration" onChange={(e) => setAuctionProps({timeout : e.currentTarget.value})} type="text"/>
							<input value={} placeholder="Auction Item" onChange={handleFile} type="file"/>
						</div>
						{ preview &&
							<div className="">
								<image src={auctionItem}/>
							</div>
						}
						<div className="">
							<button className="" onClick={initAuctionProps}>Initialize Auction Props</button>
						</div>
					 </div>
					}
				</div>
			}
			{bidder && 
				<div className="">
					<h1>Paste the Contract Info below to join the Auction</h1>
					<div className="">
						<textarea spellCheck="false" onChange={(e) => setCtcInfoStr(e.currentTarget.value)}/>
					</div>
					<div className="">
						{ viewAuctionProps() }
						<div className="">
							<button className="" onClick={acceptTerms}>Accept Terms</button>
						</div>
					</div>
				</div>
			}
			{(waiting && params.role == "creator") &&
				<div>
			        Waiting for the Bidders...
			    </div>
			}
		</div>
	);
};

export default Auctioneer;