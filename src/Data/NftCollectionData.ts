import TonWallet from "./TonWallet";

export default class NftCollectionData {
    /**
     *
     */
    constructor(
        public owner: TonWallet,
        public royalty: number,
        public collectionContentUri: string,
        public nftItemContentBaseUri: string,
    ) { }
}
