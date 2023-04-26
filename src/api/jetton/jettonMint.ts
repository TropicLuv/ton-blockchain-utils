import express from 'express';
import JettonMinterDeploy from '../../Data/JettonMinterData';
import TonWallet from '../../Data/TonWallet';
import { repo } from './repo';


const router = express.Router();



router.post<JettonMinterDeploy, {}>('/mint', async (req, res) => {
    //   res.json({
    //     message: 'API - 👋🌎🌍🌏',
    //   });

    const newWallet = await repo.Mint.jettonMint(req.body);
    newWallet ? res.sendStatus(200) : res.sendStatus(400)



});


export default router;
