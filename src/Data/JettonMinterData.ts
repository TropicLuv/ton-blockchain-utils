import TonWallet from "./TonWallet";

export default class JettonMinterData {
    /**
     *
     */
    constructor(
        public minterWallet: TonWallet,
        public jettonContentUri: string,
    ) { }
}
