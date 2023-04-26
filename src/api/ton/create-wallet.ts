import express from 'express';
import TonWallet from '../../Data/TonWallet';
import { repo } from './repo';


const router = express.Router();



router.post<{}, TonWallet>('/create-wallet', async (req, res) => {
    //   res.json({
    //     message: 'API - 👋🌎🌍🌏',
    //   });
    const newWallet = await repo.CreateWallet.createWallet();
    newWallet == undefined ? res.sendStatus(400) : res.json(newWallet)


});


export default router;
