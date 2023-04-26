import { type } from "os";
import TonWallet from "../../Data/TonWallet";
import { ITonWallet } from "../../interfaces/ITonWallet";
import { tonweb } from "../tonweb";
import { sleep, walletInterface } from "../utils";
const {
    fromNano

} = require("tonweb/src/utils/Utils");

export class Balance {

    /**
     *
     */
    constructor() {


    }
    public static async balance(data: TonWallet): Promise<number | undefined> {

        try {

            console.log(data)

            const wallet = walletInterface(data)





            const address = await wallet.getAddress()

            // await sleep(1010);

            return fromNano(await tonweb.getBalance(address));





        } catch (e) {

            return undefined;

        }


    }
}