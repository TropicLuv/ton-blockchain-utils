<h1>Express.js api for interacting with TON Blockchain</h1>
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

<h2>Ton Coin + Wallet</h2>


- Balance
<code>
{
        "address": "0:ac7b215935c08fc7352ee678c974074890a3314a64a20974b4024537ed891a41",
        "publicKey": "4a00661d700b392bcfc095e92be9d9f31ae8bdb1464c58897013b7c4fffqqbbe",
        "privateKey": "61428dcae4094df1b691911894a9f074152e0c53daa5q95f66f8dd84336c04544a00661d700b392bcfc095e92be9d9f31ae8bdb1464c58897013b7c4fff11bbe"
}
</code>
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

<h2>NFT Collection</h2>

- Create NFT Collection
{
    "owner" : {
        "address" : "0:ac7b215935c08fc7352ee678c974074890a3314a64a20974b40537ed89106a41",
        "publicKey" :
            "4a00661d700b392bcfc095e92be9d9f31ae8bdb1464c58897013b7c4fff11bbe",
        "privateKey" :
            "61428dcae4094df1b691911894a9f074152e0c53daa520cf66f8dd84336c04544a00661d700b392bcfc095e92be9d9f31ae8bdb1464c58897013b7c4fff11bbe"
    },

    "royalty" : 0.2,
    "collectionContentUri" : "https://nft-world.space/gems/collection.json",
    "nftItemContentBaseUri": "https://nft-world.space/gems/json/"

}

- Get NFT Collection info
{
    "owner" : {
        "address" : "0:ac7b215935c08fc7352ee678c974074890a3314a64a20974b40537ed89106a41",
        "publicKey" :
            "4a00661d700b392bcfc095e92be9d9f31ae8bdb1464c58897013b7c4fff11bbe",
        "privateKey" :
            "61428dcae4094df1b691911894a9f074152e0c53daa520cf66f8dd84336c04544a00661d700b392bcfc095e92be9d9f31ae8bdb1464c58897013b7c4fff11bbe"
    },

    "royalty" : 0.13,
    "collectionContentUri" : "111",
    "nftItemContentBaseUri": "111"

}

- Updating NFT Collection
{
    "collection": {
        "owner" : {
            "address" : "0:ac7b215935c08fc7352ee678c974074890a3314a64a20974b40537ed89106a41",
            "publicKey" :
                "4a00661d700b392bcfc095e92be9d9f31ae8bdb1464c58897013b7c4fff11bbe",
            "privateKey" :
                "61428dcae4094df1b691911894a9f074152e0c53daa520cf66f8dd84336c04544a00661d700b392bcfc095e92be9d9f31ae8bdb1464c58897013b7c4fff11bbe"
        },

        "royalty" : 0.1,
        "collectionContentUri" : "https://nft-world.space/gems/collection.json",
        "nftItemContentBaseUri": "https://nft-world.space/gems/json/"

    },
    "newRoyalty": 1,
    "newRoyaltyAddress": "0:ac7b215935c08fc7352ee678c974074890a3314a64a20974b40537ed89106a41",
    "newCollectionContentUri" : "https://nft-world.space/gems/collection.json",
    "newNftItemContentBaseUri": "https://nft-world.space/gems/json/" 

}

- Deploying NFT Item
{
    "id" : 3,
    
    "nftCollection" : {
    "owner" : {
        "address" : "0:ac7b215935c08fc7352ee678c974074890a3314a64a20974b40537ed89106a41",
        "publicKey" :
            "4a00661d700b392bcfc095e92be9d9f31ae8bdb1464c58897013b7c4fff11bbe",
        "privateKey" :
            "61428dcae4094df1b691911894a9f074152e0c53daa520cf66f8dd84336c04544a00661d700b392bcfc095e92be9d9f31ae8bdb1464c58897013b7c4fff11bbe"
    },

    "royalty" : 0.2,
    "collectionContentUri" : "https://nft-world.space/gems/collection.json",
    "nftItemContentBaseUri": "https://nft-world.space/gems/json/"

},
    "itemContentUri": "1.json"
}

- NFT Item info
{
    "id" :0,
    "nftCollection" : {
        "owner" : {
            "address" : "0:ac7b215935c08fc7352ee678c974074890a3314a64a20974b40537ed89106a41",
            "publicKey" :
                "4a00661d700b392bcfc095e92be9d9f31ae8bdb1464c58897013b7c4fff11bbe",
            "privateKey" :
                "61428dcae4094df1b691911894a9f074152e0c53daa520cf66f8dd84336c04544a00661d700b392bcfc095e92be9d9f31ae8bdb1464c58897013b7c4fff11bbe"
        },

        "royalty" : 0.06,
        "collectionContentUri" : "https://nft-world.space/gems/collection.json",
        "nftItemContentBaseUri": "https://nft-world.space/gems/json/"

    },
         "itemContentUri": "0.json"
}

- Transfering NFT 
{   
    "owner" : {
        "address" : "0:ac7b215935c08fc7352ee678c974074890a3314a64a20974b40537ed89106a41",
        "publicKey" :
            "4a00661d700b392bcfc095e92be9d9f31ae8bdb1464c58897013b7c4fff11bbe",
        "privateKey" :
            "61428dcae4094df1b691911894a9f074152e0c53daa520cf66f8dd84336c04544a00661d700b392bcfc095e92be9d9f31ae8bdb1464c58897013b7c4fff11bbe"
    },
    "nftAddress": "EQBRVGxekybb1EaXIsX9Om_46jAh67iudsvNE_wL1q0vi_HH",
    "newOwner":
        {
            "address": "0:ca9577eee47d338e3b479ae93207ce89c84e341abc8d93d60de12530cf847d2b",
            "publicKey": "d57494c6cd77f031d22d40002a391365824784fb07c03d8d01c9005715881e7f",
            "privateKey": "e6f12483401b8e04029c1bd3bab883fda9e3596e270db27289ed240259ee4176d57494c6cd77f031d22d40002a391365824784fb07c03d8d01c9005715881e7f"
        }
}

- Deploying Marketplace
{
    "address" : "0:ac7b215935c08fc7352ee678c974074890a3314a64a20974b40537ed89106a41",
    "publicKey" :
        "4a00661d700b392bcfc095e92be9d9f31ae8bdb1464c58897013b7c4fff11bbe",
    "privateKey" :
        "61428dcae4094df1b691911894a9f074152e0c53daa520cf66f8dd84336c04544a00661d700b392bcfc095e92be9d9f31ae8bdb1464c58897013b7c4fff11bbe"
}


<h2>Ton Jetton</h2>

- Mint Jetton
{
"minter": {
    "minterWallet" : {
                "address" : "0:ac7b215935c08fc7352ee678c974074890a3314a64a20974b40537ed89106a41",
                "publicKey" :
                    "4a00661d700b392bcfc095e92be9d9f31ae8bdb1464c58897013b7c4fff11bbe",
                "privateKey" :
                    "61428dcae4094df1b691911894a9f074152e0c53daa520cf66f8dd84336c04544a00661d700b392bcfc095e92be9d9f31ae8bdb1464c58897013b7c4fff11bbe"
    },
    "jettonContentUri": "https://nft-world.space/gems/jetton/data.json"

    },
    "tokens" : 100500
}

- Deploy Minter
{
    "minterWallet" : {
            "address" : "0:ac7b215935c08fc7352ee678c974074890a3314a64a20974b40537ed89106a41",
            "publicKey" :
                "4a00661d700b392bcfc095e92be9d9f31ae8bdb1464c58897013b7c4fff11bbe",
            "privateKey" :
                "61428dcae4094df1b691911894a9f074152e0c53daa520cf66f8dd84336c04544a00661d700b392bcfc095e92be9d9f31ae8bdb1464c58897013b7c4fff11bbe"
    },
    "jettonContentUri": "https://nft-world.space/gems/jetton/data.json"


}
