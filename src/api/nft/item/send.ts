import express from 'express';
import NftItemSendData from '../../../Data/NftItemSendData';
import { repo } from '../repo';


const router = express.Router();



router.post<NftItemSendData, {}>('/transfer', async (req, res) => {
    //   res.json({
    //     message: 'API - 👋🌎🌍🌏',
    //   });

    const result = await repo.SendNftItem.sendNftItem(req.body);
    result ? res.sendStatus(200) : res.sendStatus(400)



});


export default router;
