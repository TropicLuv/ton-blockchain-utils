import TonWeb from "tonweb";


const { JettonMinter, JettonWallet } = TonWeb.token.jetton;
import JettonMinterData from "../../Data/JettonMinterData";
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

export class DeployMinter {

    /**
     *
     */
    constructor() {


    }

    public static async deployMinter(data: JettonMinterData): Promise<string | undefined> {



        try {

            const wallet = walletInterface(data.minterWallet)


            const walletAddress = await wallet.getAddress();

            await sleep(1010)


            const minter = new JettonMinter(tonweb.provider, {
                adminAddress: walletAddress,
                jettonContentUri: data.jettonContentUri,
                jettonWalletCodeHex: JettonWallet.codeHex
            });

            const minterAddress = await minter.getAddress();



            const deployMinter = async () => {
                const seqno = await wallet.methods.seqno().call();
                console.log({ seqno })
                await sleep(1010)


                await wallet.methods.transfer({
                    secretKey: fromHexToBytes(data.minterWallet.privateKey!),
                    toAddress: minterAddress.toString(true, true, true),
                    amount: tonweb.utils.toNano('0.05'),
                    seqno: seqno!,
                    sendMode: 3,
                    stateInit: (await minter.createStateInit()).stateInit
                }).send()
            }

            await deployMinter()



            return minterAddress.toString(true, true, true)

        } catch (error) {

            console.log(error)
            return undefined;

        }


    }
}