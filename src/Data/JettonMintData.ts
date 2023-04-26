import JettonMinterData from "./JettonMinterData";
import TonWallet from "./TonWallet";

export default class JettonMintData {
    /**
     *
     */
    constructor(
        public minter: JettonMinterData,
        public amount: number
    ) { }
}
