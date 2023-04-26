import { WalletContract } from "tonweb/dist/types/contract/wallet/wallet-contract";
import TonWallet from "../Data/TonWallet";
import { tonweb } from "./tonweb";
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

export const walletInterface = (data: TonWallet): WalletContract => {

    const WalletClass = tonweb.wallet.all['v3R1'];

    const publicKey = data.publicKey


    if (data.publicKey == undefined) {
        const wallet = tonweb.wallet.create({ address: data.address });

        return wallet;

    }
    else {
        const wallet = new WalletClass(tonweb.provider, {
            publicKey: fromHexToBytes(publicKey!),
            wc: 0
        });

        return wallet;

    }



}


export const fromHexToBytes = (key: string): Uint8Array => {
    const mid = key.length / 2

    const firstHalf = hexToBytes(key.slice(0, mid))
    const secondHalf = hexToBytes(key.slice(mid, key.length))

    return concatBytes(firstHalf, secondHalf)

}

export const sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}