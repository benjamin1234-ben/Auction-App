import '../App.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getDefaults, getAccount } from './redux/selector';
import { updateContract, updateWager} from './redux/slice';
import { getAccount } from './redux/selector';
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);

const navigate = useNavigate();
const {standardUnit} = reach;

function Auctioneer() {
	const [creator, setCreator] = useState(false);
	const [bidder, setBidder] = useState(false);
	const [waiting, setwaiting] = useState(false);
	const [timeout, settimeout] = useState(false);
	const [auctionProps, setAuctionProps] = useState({});
	const [ctc, setCtc] = useState();
	const [ctcInfoStr, setCtcInfoStr] = useState();
    const dispatch = useDispatch();
    const _fetch = useSelector();

    useEffect(() => {
    	if(!ctcInfoStr && params.role == "creator") {
    		setCreator(true);
    		const account = _fetch(getAccount.acc);
	    	setCtc(account.contract(backend));
	    	setCtcInfoStr(JSON.stringify(await ctc.getInfo(), null, 2));
	    	dispatch(updateContract(ctc));
    	} else if(ctcInfoStr && params.role == "bidder") {
    		setBidder(true);
    		const account = _fetch(getAccount.acc);
    		setCtc(account.contract(backend, JSON.parse(ctcInfoStr)));
    		dispatch(updateContract(ctc));

    		const interactInterface = {
    			informTimeout() {
    				settimeout(true);
    			},
    			async acceptWager(wagerAtomic) {
    				setWagerAmt(reach.formatCurrency(wagerAtomic, 4));
    			}
    		};
    		backend.Guesser(ctc, interactInterface);
    	};
    }, []);

    const setAuctionProps = async(e) => {
    	e.preventDefault;
    	dispatch(updateWager(wagerAmt));
    	const interactInterface = {
    		wager: reach.parseCurrency(wagerAmt),
    		deadline: {ETH: 10, ALGO: 100, CFX: 1000}[reach.connector]
    	};
    	backend.Asker(ctc, interactInterface);
    };
    const copy = async(e) => {
    	e.preventDefault;
    	navigator.clipboard.writeText(ctcInfoStr);
    	e.target.innerHTML = 'Copied!';
    	e.target.disabled = true;
    };
    const acceptTerms = (e) => {
    	e.preventDefault;
    	navigate("/play");
    }

	return (
		{ creator && 
			<div className="asker">
				<h1>Copy the Contract Info below and give it to your opponent</h1>
				<div className="">
					{ctcInfoStr}
				</div>
				<div className="copy_button">
					<button className="" onClick={copy}>Copy</button>
				</div>
				<div className="">
					<h1>Please Initiate the Wager</h1>
					<div className="">
						<input value={_fetch(getDefaults.defaultWager)} placeholder={`The default wager amount ${_fetch(getDefaults.defaultWager)}`} onChange={(e) => setState(wagerAmt = e.currentTarget.value)} type="text"/>
						<button className="" onClick={setWager}>Initiate Wager</button>
					</div>
				</div>
			</div>
		}
		{ bidder && 
			<div className="">
				<h1>Paste the Contract Info below to join the game</h1>
				<div className="">
					<textarea spellCheck="false" onChange={(e) => setState(ctcInfoStr: e.currentTarget.value)}/>
				</div>
				<div className="">
					<button className="" onClick={attach}>Attach</button>
				</div>
				<div className="">
					<h1>{wagerAmt ? `Please accept the wager of ${wagerAmt standardUnit}` : 'Attach contract to view the wager'}</h1>
					<div className="">
						<button className="" onClick={acceptTerms}>Accept Terms</button>
					</div>
				</div>
			</div>
		}
		{ waiting &&
			<div>
		        Waiting for the other Auctioneer...
		        <br />Think about which move you want to play.
		    </div>
		}
		{ timeout &&
			<div>
		        There's has been a Timeout...
		        <br />Somebody took too long.
		    </div>
		}
	);
};

export default Auctioneer;