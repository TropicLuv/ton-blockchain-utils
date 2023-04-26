import express from 'express';
import JettonMinterDeploy from '../../../Data/JettonMinterData';
import NftCollectionData from '../../../Data/NftCollectionData';
import TonWallet from '../../../Data/TonWallet';
import { repo } from '../repo';


const router = express.Router();



router.post<NftCollectionData, {}>('/deploy', async (req, res) => {
    //   res.json({
    //     message: 'API - 👋🌎🌍🌏',
    //   });

    const result = await repo.CreateCollection.createCollection(req.body);
    result == undefined ? res.sendStatus(400) : res.send(result)



});


export default router;
