import TonWallet from "./TonWallet";

export default class TonTransfer {
    /**
     *
     */
    constructor(
        public wallet: TonWallet,
        public toAddress: string,
        public amount: number,
        public message: string,
    ) { }
}
