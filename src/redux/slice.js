import { createSlice } from "@reduxjs/toolkit";
import * as backend from '../build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlogoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);
reach.setWalletFallback(reach.walletFallback({providerEnv: "TestNet", MyAlgoConnect}));

const {standardUnit} = reach;

export const auctionSlice = createSlice({
	name : "auctionState",
	initialState : {
		account : {},
		contract : "",
		outcome : "",
		lastBid : null,
		auctionProps : { startingBid, timeout },
		owner : { id, address, auctionItem },
		defaults : { defaultFundAmt: '10', standardUnit }
	},
	reducers : {
		updateAccount : (state, action) => {
			state.account = action.payload;
		},
		updateContract : (state, action) => {
			state.contract = action.payload;
		},
		updateOutcome : (state, action) => {
			state.outcome = action.payload;
		},
		updateAuctionProps : (state, action) => {
			state.auctionProps = action.payload;
		},
		updateOwner : (state, action) => {
			state.owner = action.payload;
		},
		updateLastBid : (state, action) => {
			state.lastBid = action.payload;
		}
	}
});

export const { updateAccount, updateContract, updateOutcome, updateAuctionProps, updateAddress, updateLastBid } = auctionSlice.actions;

export default auctionSlice.reducer;