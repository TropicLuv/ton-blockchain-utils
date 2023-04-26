import express from 'express';
import TonTransfer from '../../Data/TonTransfer';
import TonWallet from '../../Data/TonWallet';
import { repo } from './repo';


const router = express.Router();



router.get<TonWallet, number>('/balance', async (req, res) => {
    //   res.json({
    //     message: 'API - 👋🌎🌍🌏',
    //   });

    console.log(req.body)

    const result = await repo.Balance.balance(req.body);

    result == undefined ? res.sendStatus(400) : res.send(result!)


});

export default router;
