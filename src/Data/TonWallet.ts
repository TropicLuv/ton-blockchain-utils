import { ITonWallet } from "../interfaces/ITonWallet";

export default class TonWallet implements ITonWallet {
    /**
     *
     */
    constructor(
        public address: string,
        public publicKey?: string,
        public privateKey?: string) { }
}
