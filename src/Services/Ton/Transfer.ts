import TonTransfer from "../../Data/TonTransfer";
import TonWeb from "tonweb";
import { tonweb } from "../tonweb";
import { fromHexToBytes, sleep, walletInterface } from "../utils";
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

export class Transfer {
    public static async transfer(data: TonTransfer): Promise<boolean> {

        try {

            const wallet = walletInterface(data.wallet)



            const seqno = await wallet.methods.seqno().call();


            await sleep(1000)

            const transfer = async () => await wallet.methods.transfer({
                secretKey: fromHexToBytes(data.wallet.privateKey!),
                toAddress: data.toAddress,
                amount: TonWeb.utils.toNano(data.amount.toString()),
                seqno: seqno!,
                payload: data.message,
                sendMode: 3,
            }).send();

            await transfer()

            await sleep(1000)


            while (seqno == await wallet.methods.seqno().call()) {
                await sleep(10)
            }

            return true;

        } catch (e) {


            console.log(e)
            return false;

        }


    }
}