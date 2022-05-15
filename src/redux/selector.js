const getAccount = (state) => (state.app.account); 

const getContract = (state) => (state.app.contract); 

const getBids = (state) => (state.app.bids); 

const getOutcome = (state) => (state.app.outcome); 

const getAuctionProps = (state) => (state.app.auctionProps);

const getDefaults = (state) => (state.app.defaults); 

export default { getAccount, getContract, getBid, getOutcome, getAuctionProps, getDefaults };