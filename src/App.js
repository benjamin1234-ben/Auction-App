import './App.css';
import { useState, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateAccount } from './redux/slice';
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlogoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);
reach.setWalletFallback(reach.walletFallback({providerEnv: "MainNet", MyAlgoConnect}));

function App() {
  const [rules, setRules] = useState(true);
  const [account, setAccount] = useState();
  const [connect, setConnect] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect();

    const handleClick = async (e) => {
    e.preventDefault();
    const acc = await reach.getDefaultAccount();
    const balAtomic = await reach.balanceOf(acc);
    const balance = reach.formatCurrency(balAtomic, 4);
    const account = { acc, balance }

    setRules(false);
    setConnect(true);
    setAccount(account);
    dispatch(updateAccount(account));

    if(await reach.canFundFromFaucet()) {
      navigate("/fund");
    } else {
      navigate("/role");
    }
  };

  return (
    <div className='row teal lighten-4'>
      <div className="col s8 offset-s2">
        <h1>Auction App</h1>
        {rules &&
         <div className='collapsible'>
            <h1 className='collapsible-header'><i className="material-icons">book</i>RULES OF THE AUCTION</h1>
            <p className="collapsible-body">This is an Auction App where multiple bidders converge to bid on an asset. The asset is placed on auction by the 'Creator' 
              or the 'Owner'. The auction has a time limit once the deadline is reached, the assets is auctioned off to the highest bidder.
            </p>
         </div>
        }
        {connect &&
         <div className='loading'>
          <p>Please wait while we connect to your wallet account. If this takes more than a few seconds then there is something wrong.</p>
         </div>
        }
        {(account) &&
         <div className='connect'>
          <button className='connect_btn' onClick={handleClick}>{!connect ? 'Connect Wallet' : 'Loading'}</button>
         </div>
        }
        <div className=''>
            <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default App;