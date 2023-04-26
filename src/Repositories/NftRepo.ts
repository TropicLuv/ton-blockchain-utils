import { CreateCollection } from "../Services/Nft/CreateCollection";
import { CreateNftItem } from "../Services/Nft/CreateNftItem";
import { SendNftItem } from "../Services/Nft/SendNftItem";



export class NftRepo {
    public CreateCollection = CreateCollection
    public CreateNftItem = CreateNftItem
    public SendNftItem = SendNftItem
    // constructor() { }

}

