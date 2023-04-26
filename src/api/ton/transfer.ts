import express from 'express';
import TonTransfer from '../../Data/TonTransfer';
import TonWallet from '../../Data/TonWallet';
import { repo } from './repo';


const router = express.Router();



router.post<TonTransfer, {}>('/transfer', async (req, res) => {
    //   res.json({
    //     message: 'API - 👋🌎🌍🌏',
    //   });

    const result = await repo.Transfer.transfer(req.body);
    result == false ? res.sendStatus(400) : res.sendStatus(200)


});

export default router;
