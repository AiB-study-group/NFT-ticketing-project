// General Instructions for forking the mainnet
//   1) Create a mainnet node on Alchemy and place the API key in the .env file
//   3) Fetch Whales addresses and place them in the .env file and make sure they have enough eth to make txs 
//   4) Run ($source .env) in the root directory to use those vars
//   5) In one terminal run: 
//         ( ganache-cli --fork https://eth-mainnet.alchemyapi.io/v2/$ALCHEMY_KEY \
//         --networkId 999 --unlock $WHALE1_ADDRESS --unlock $WHALE2_ADDRESS )
//   6) In another terminal run: 
//         ( truffle test test/contracts.test.js --network mainnet_fork ) 






const Ticketing = artifacts.require("./Ticketing.sol");

contract("Ticketing", accounts => {
  it("...should do smth", async () => {
    const ticketingInstance = await Ticketing.deployed();

   
  });
});
