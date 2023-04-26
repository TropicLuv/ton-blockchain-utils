import NftCollectionData from "./NftCollectionData";
import TonWallet from "./TonWallet";

export default class JettonMinterData {
    /**
     *
     */
    constructor(
        public id: number,
        public nftCollection: NftCollectionData,
        public itemContentUri: string

    ) { }
}
