import NftCollectionData from "./NftCollectionData";
import TonWallet from "./TonWallet";

export default class JettonMinterData {
    /**
     *
     */
    constructor(
        public owner: TonWallet,
        public nftAddress: string,
        public newOwner: TonWallet

    ) { }
}
