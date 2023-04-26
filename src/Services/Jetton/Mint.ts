import TonWeb from "tonweb";
import JettonMint from "../../Data/JettonMintData";


const { JettonMinter, JettonWallet } = TonWeb.token.jetton;
import JettonMinterDeploy from "../../Data/JettonMinterData";
import TonWallet from "../../Data/TonWallet";
import { tonweb } from "../tonweb";
import { fromHexToBytes, walletInterface, sleep } from "../utils";
const {
    BN,
    nacl,
    sha256,
    fromNano,
    toNano,
    bytesToHex,
    hexToBytes,
    stringToBytes,
    crc32c,
    crc16,
    concatBytes,
    bytesToBase64,
    base64ToBytes,
    base64toString,
    stringToBase64,
    compareBytes,
    readNBytesUIntFromArray,
    keyPairFromSeed,
    newKeyPair,
    newSeed
} = require("tonweb/src/utils/Utils");

export class Mint {

    /**
     *
     */
    constructor() {


    }

    public static async jettonMint(data: JettonMint): Promise<boolean> {



        try {

            const wallet = walletInterface(data.minter.minterWallet)


            const walletAddress = await wallet.getAddress();

            await sleep(1010)


            const minter = new JettonMinter(tonweb.provider, {
                adminAddress: walletAddress,
                jettonContentUri: data.minter.jettonContentUri,
                jettonWalletCodeHex: JettonWallet.codeHex
            });

            const minterAddress = await minter.getAddress();


            const mint = async () => {
                await sleep(1010)

                const seqno = await wallet.methods.seqno().call();
                console.log({ seqno })

                await sleep(1010)

                console.log(
                    await wallet.methods.transfer({
                        secretKey: fromHexToBytes(data.minter.minterWallet.privateKey!),
                        toAddress: minterAddress.toString(true, true, true),
                        amount: TonWeb.utils.toNano('0.05'),
                        seqno: seqno!,
                        payload: await minter.createMintBody({
                            tokenAmount: TonWeb.utils.toNano('100500'),
                            destination: minterAddress,
                            amount: TonWeb.utils.toNano('0.04')
                        }),
                        sendMode: 3,
                    }).send()
                );
            }

            await mint()


            return true

        } catch (error) {

            console.log(error)
            return false;

        }


    }
}