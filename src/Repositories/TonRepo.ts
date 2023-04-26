import { CreateWallet } from "../Services/Ton/CreateWallet";
import { Transfer } from '../Services/Ton/Transfer'
import { Balance } from "../Services/Ton/Balance";



export class TonRepo {
    public CreateWallet = CreateWallet;
    public Transfer = Transfer;
    public Balance = Balance;

    // constructor() { }

}

