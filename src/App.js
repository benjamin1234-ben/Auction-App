import './App.css';
import { Grid, Item, Button, Modal, Box, Divider, CircularProgress } from '@mui/material';
import { useState } from 'react';
import ErrorBoundary from './components/error';
import { useNavigate, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateAccount } from './redux/slice';
// import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
// import { ALGO_MyAlogoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);
// reach.setWalletFallback(reach.walletFallback({providerEnv: "TestNet", MyAlgoConnect}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function App() {
  const [rules, setRules] = useState(true);
  const [account, setAccount] = useState();
  const [connect, setConnect] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();


    const handleClick = async (e) => {
      e.preventDefault();
      setRules(false);
      setConnect(true);

      const acc = await reach.getDefaultAccount();
      const balAtomic = await reach.balanceOf(acc);
      const balance = reach.formatCurrency(balAtomic, 4);
      const account = { acc, balance }

      setAccount(account);
      dispatch(updateAccount(account));

      if(await reach.canFundFromFaucet()) {
        navigate("/fund");
      } else {
        navigate("/role");
      }
    };

  return (
     <ErrorBoundary>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={2}/>
          <Grid item xs={8}>
              <Box sx={{textAlign: "center"}}>
                <h1>Auction App</h1>
              </Box>
              {rules &&
               <div>
                  <Divider>RULES</Divider>
                  <Box sx={{textAlign: "center", marginTop: 5, marginBottom: 5}}>
                    <Button variant="text" color="primary" onClick={() => setOpen(true)}>RULES OF THE AUCTION</Button>
                  </Box>
                  <Divider>RULES</Divider>
                  <Modal onClose={() => setOpen(false)} open={open} aria-labelledby="title" aria-describedby="description">
                    <Box sx={style}>
                      <h1 id="title">RULES OF THE GAME</h1>
                      <p id="description">
                        This is an Auction App where multiple bidders converge to bid on an asset. The asset is placed on auction by the 'Creator' 
                        or the 'Owner'. The auction has a time limit once the deadline is reached, the assets is auctioned off to the highest bidder.
                      </p>
                    </Box> 
                  </Modal>
               </div>
              }
              {(connect && !account) &&
               <Box sx={{textAlign: "center"}}>
                <p>Please wait while we connect to your wallet account. If this takes more than a few minutes then there is something wrong.</p>
                <CircularProgress color="primary" />
               </Box>
              }
              {!account &&
               <Box sx={{textAlign: "center", marginTop: 5, marginBottom: 5}}>
                <Button variant="contained" color="success" onClick={handleClick}>{!connect ? 'Connect Wallet' : 'Loading....'}</Button>
               </Box>
              }
          </Grid>
          <Grid item xs={2}/>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}/>
         <Grid item xs={8}>
            <Outlet/>
          </Grid>
          <Grid item xs={2}/>
        </Grid>
      </Box>
    </ErrorBoundary>
  )
}

export default App;