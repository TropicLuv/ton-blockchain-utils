import TonWallet from "../../Data/TonWallet";
import { tonweb } from "../tonweb";
import { fromHexToBytes, walletInterface } from "../utils";
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

export class CreateWallet {

    /**
     *
     */
    constructor() {


    }
    public static async createWallet(): Promise<TonWallet | undefined> {

        try {

            const keyPair = newKeyPair();

            // const keyPair = tonweb.nacl.sign.keyPair();
            // const newWallet = walletInterface(keyPair.publicKey)


            const WalletClass = tonweb.wallet.all['v3R1'];

            const newWallet = new WalletClass(tonweb.provider, {
                publicKey: keyPair.publicKey,
                wc: 0
            });


            const wallet = new TonWallet(
                (await newWallet.getAddress()).toString(true, true, true),
                bytesToHex(keyPair.publicKey),
                bytesToHex(keyPair.secretKey)
            )

            return wallet


        } catch (e) {

            console.log(e)
            return undefined;

        }


    }
}