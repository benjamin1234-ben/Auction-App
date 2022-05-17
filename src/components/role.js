import '../App.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as backend from '../build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlogoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);
reach.setWalletFallback(reach.walletFallback({providerEnv: "MainNet", MyAlgoConnect}));

const navigate = useNavigate();

function Role() {
    const creator = (e) => {
        e.preventDefault;
        navigate("/auctioneer/creator");
    };

    const bidder = (e) => {
        e.preventDefault;
        navigate("/auctioneer/bidder");
    };

    return (
        <div className='role'>
            <h1>Which role would you like to partake in the Auction App</h1>
            <div className='choice'>
                <button className='creator' onClick={creator}> Asker</button>
                <button className='bidder' onClick={bidder}>Guesser</button>
            </div>
        </div>
    );
};

export default Role;