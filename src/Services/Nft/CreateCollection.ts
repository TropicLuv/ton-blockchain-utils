import TonWeb from "tonweb";


import NftCollectionData from "../../Data/NftCollectionData";
import { tonweb } from "../tonweb";
import { fromHexToBytes, walletInterface, sleep } from "../utils";
const { NftItem } = require("tonweb/src/contract/token/nft/NftItem");
const { NftCollection } = require("tonweb/src/contract/token/nft/NftCollection");


export class CreateCollection {

    /**
     *
     */
    constructor() {


    }

    public static async createCollection(data: NftCollectionData): Promise<string | undefined> {



        try {

            const wallet = walletInterface(data.owner)


            const walletAddress = await wallet.getAddress();


            const nftCollection = new NftCollection(tonweb.provider, {
                ownerAddress: walletAddress,
                royalty: data.royalty,
                royaltyAddress: walletAddress,
                collectionContentUri: data.collectionContentUri,
                nftItemContentBaseUri: data.nftItemContentBaseUri,
                nftItemCodeHex: NftItem.codeHex
            });
            const nftCollectionAddress = await nftCollection.getAddress();


            const deployNftCollection = async () => {
                const seqno = (await wallet.methods.seqno().call()) || 0;
                console.log({ seqno })
                await sleep(1010)


                console.log(
                    await wallet.methods.transfer({
                        secretKey: fromHexToBytes(data.owner.privateKey!),
                        toAddress: nftCollectionAddress.toString(true, true, true),
                        amount: TonWeb.utils.toNano('1'),
                        seqno: seqno,
                        // payload: null, // body
                        sendMode: 3,
                        stateInit: (await nftCollection.createStateInit()).stateInit
                    }).send()
                );
            }

            await deployNftCollection()

            return nftCollectionAddress.toString(true, true, true)
        } catch (error) {

            console.log(error)
            return undefined;

        }


    }
}