<h1>Express.js api for integrating with TON Blockchain</h1>
http://localhost:5000/api/v1/ = api

TON Coins + Wallet
- [ ] GET api/ton/balance - checking balance of the wallet
- [ ] POST api/ton/create-wallet - creating(deploying) new wallet
- [ ] POST api/ton/transfer - transfering TON coins

TON NFT
- [ ] POST api/nft/collection/deploy - creating(deploying) NFT Collection
- [ ] GET api/nft/collection/info - getting information about specific NFT Collection
- [ ] POST api/nft/collection/update - updating NFT Collection info
- [ ] POST api/nft/item/deploy - creating(deploying) NFT Item, which is part of specific Collection
- [ ] GET api/nft/info - getting information about NFT Item
- [ ] POST api/nft/item/transfer - transfering NFT from some wallet
- [ ] POST api/nft/marketplace/create - creating(deploying) Marketplace (needed to deploy NFT Collection)

TON Jetton
- [ ] POST api/jetton/mint - minting Jetton
- [ ] POST api/jetton/deploy-minter - creating(deploying)minter to mint Jetton 


Sample JSON requests

- Balance
{

        "address": "0:ac7b215935c08fc7352ee678c974074890a3314a64a20974b4024537ed891a41",
        "publicKey": "4a00661d700b392bcfc095e92be9d9f31ae8bdb1464c58897013b7c4fffqqbbe",
        "privateKey": "61428dcae4094df1b691911894a9f074152e0c53daa5q95f66f8dd84336c04544a00661d700b392bcfc095e92be9d9f31ae8bdb1464c58897013b7c4fff11bbe"
    
}
- New Wallet
none

- Transfer TON
{
    "wallet":  {
        "address": "0:ac7b215935c08fc7352ee678c974074890a3314a64a20974b4024537ed891a41",
        "publicKey": "4a00661d700b392bcfc095e92be9d9f31ae8bdb1464c58897013b7c4fffqqbbe",
        "privateKey": "61428dcae4094df1b691911894a9f074152e0c53daa5q95f66f8dd84336c04544a00661d700b392bcfc095e92be9d9f31ae8bdb1464c58897013b7c4fff11bbe"
        },
    "toAddress": "0:f4ec29b7b394f205dee0770724b86b2c3c5a77bec7acd9491d7c31583c7b50a3",
    "amount" : 0.2,
    "message" : "root"
}
