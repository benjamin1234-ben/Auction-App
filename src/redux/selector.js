const getAccount = (state) => (state.app.account); 

const getContract = (state) => (state.app.contract); 

const getOutcome = (state) => (state.app.outcome); 

const getAuctionProps = (state) => (state.app.auctionProps);

const getAddress = (state) => (state.app.address);

const getLastBid = (state) => (state.app.lastBid);

const getDefaults = (state) => (state.app.defaults); 

export default { getAccount, getContract, getOutcome, getAuctionProps, getAddress, getLastBid, getDefaults };