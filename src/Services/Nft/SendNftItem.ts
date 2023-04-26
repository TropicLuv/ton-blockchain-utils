import TonWeb from "tonweb";
import NftItemData from "../../Data/NftItemData";
import NftItemSendData from "../../Data/NftItemSendData";

import { tonweb } from "../tonweb";
import { fromHexToBytes, walletInterface, sleep } from "../utils";


const { NftItem } = require("tonweb/src/contract/token/nft/NftItem");
const { NftCollection } = require("tonweb/src/contract/token/nft/NftCollection");



export class SendNftItem {

    /**
     *
     */
    constructor() {
    }



    public static async sendNftItem(data: NftItemSendData): Promise<boolean> {



        try {

            const wallet = walletInterface(data.owner)
            const walletAddress = await wallet.getAddress();

            const newOwnerWallet = walletInterface(data.newOwner)
            const newOwnerAddress = await newOwnerWallet.getAddress();


            const nftItem = new NftItem(tonweb.provider, { address: data.nftAddress });


            const transferNftItem = async () => {
                const seqno = (await wallet.methods.seqno().call()) || 0;
                console.log({ seqno })

                await sleep(1010)

                const amount = TonWeb.utils.toNano('0.05');

                console.log(
                    await wallet.methods.transfer({
                        secretKey: fromHexToBytes(data.owner.privateKey!),
                        toAddress: await nftItem.getAddress(),
                        amount: amount,
                        seqno: seqno,
                        payload: await nftItem.createTransferBody({
                            newOwnerAddress: newOwnerAddress,
                            forwardAmount: TonWeb.utils.toNano('0.02'),
                            forwardPayload: new TextEncoder().encode('nft'),
                            responseAddress: walletAddress
                        }),
                        sendMode: 3,
                    }).send()
                );
            }
            await transferNftItem()

            return true

        } catch (error) {

            console.log(error)
            return false;

        }


    }
}