import { createSlice } from "@/reduxjs/toolkit";
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);

const {standardUnit} = reach;

export const gameSlice = createSlice({
	name : gameState,
	initialState : {
		account : {},
		contract : "",
		bids : [],
		outcome : "",
		auctionProps : { startingBid, timeout, auctionItem },
		defaults : { defaultFundAmt: '10', standardUnit }
	},
	reducers : {
		updateAccount : (state, action) => {
			state.account = action.payload;
		},
		updateContract : (state, action) => {
			state.contract = action.payload;
		},
		updateBids : (state, action) => {
			state.bids = action.payload;
		},
		updateOutcome : (state, action) => {
			state.outcome = action.payload;
		},
		updateAuctionProps : (state, action) => {
			state.auctionProps = action.payload;
		}
	}
});

export const { updateAccount, updateContract, updateBid, updateOutcome, updateAuctionProps } = gameSlice.actions;

export default gameSlice.reducer;