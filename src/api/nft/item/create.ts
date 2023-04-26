import express from 'express';
import JettonMinterDeploy from '../../../Data/JettonMinterData';
import NftItemData from '../../../Data/NftItemData';
import TonWallet from '../../../Data/TonWallet';
import { repo } from '../repo';


const router = express.Router();



router.post<NftItemData, {}>('/deploy', async (req, res) => {
    //   res.json({
    //     message: 'API - 👋🌎🌍🌏',
    //   });

    const result = await repo.CreateNftItem.createNftItem(req.body);
    result === undefined ? res.sendStatus(400) : res.send(result)



});


export default router;
