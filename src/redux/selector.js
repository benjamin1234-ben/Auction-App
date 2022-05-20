const getAccount = (state) => (state.app.account); 

const getContract = (state) => (state.app.contract); 

const getOutcome = (state) => (state.app.outcome); 

const getAuctionProps = (state) => (state.app.auctionProps);

const getOwner = (state) => (state.app.owner);

const getLastBid = (state) => (state.app.lastBid);

const getDefaults = (state) => (state.app.defaults); 

export default { getAccount, getContract, getOutcome, getAuctionProps, getOwner, getLastBid, getDefaults };