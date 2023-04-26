import TonWeb from "tonweb";

import NftItemData from "../../Data/NftItemData";

import { tonweb } from "../tonweb";
import { fromHexToBytes, walletInterface, sleep } from "../utils";


const { NftItem } = require("tonweb/src/contract/token/nft/NftItem");
const { NftCollection } = require("tonweb/src/contract/token/nft/NftCollection");



export class CreateNftItem {

    /**
     *
     */
    constructor() {


    }

    public static async createNftItem(data: NftItemData): Promise<string | undefined> {



        try {

            const wallet = walletInterface(data.nftCollection.owner)


            const walletAddress = await wallet.getAddress();


            const nftCollection = new NftCollection(tonweb.provider, {
                ownerAddress: walletAddress,
                royalty: data.nftCollection.royalty,
                royaltyAddress: walletAddress,
                collectionContentUri: data.nftCollection.collectionContentUri,
                nftItemContentBaseUri: data.nftCollection.nftItemContentBaseUri,
                nftItemCodeHex: NftItem.codeHex
            });

            const nftCollectionAddress = await nftCollection.getAddress();



            const dataCollection = await nftCollection.getCollectionData();
            const itemsCount = dataCollection.itemsCount.toString();

            await sleep(1010)


            if (data.id.toString() !== itemsCount) {
                return undefined
            }

            const deployNftItem = async () => {
                const seqno = (await wallet.methods.seqno().call()) || 0;
                console.log({ seqno })

                await sleep(1010)
                const amount = TonWeb.utils.toNano('0.05');





                await wallet.methods.transfer({
                    secretKey: fromHexToBytes(data.nftCollection.owner.privateKey!),
                    toAddress: nftCollectionAddress.toString(true, true, true),
                    amount: amount,
                    seqno: seqno,
                    payload: await nftCollection.createMintBody({
                        amount,
                        itemIndex: data.id,
                        itemOwnerAddress: walletAddress,
                        itemContentUri: data.itemContentUri
                    }),
                    sendMode: 3,
                }).send()
            }

            await deployNftItem()

            await sleep(1010)

            const nftAddress = (await nftCollection.getNftItemAddressByIndex(data.id)).toString(true, true, true);

            return nftAddress

        } catch (error) {

            console.log(error)
            return undefined;

        }


    }
}