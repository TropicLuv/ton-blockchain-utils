import express from 'express';
import JettonMinterData from '../../Data/JettonMinterData';
import TonWallet from '../../Data/TonWallet';
import { repo } from './repo';


const router = express.Router();



router.post<JettonMinterData, {}>('/deploy-minter', async (req, res) => {
    //   res.json({
    //     message: 'API - 👋🌎🌍🌏',
    //   });

    const response = await repo.DeployMinter.deployMinter(req.body);
    response == undefined ? res.sendStatus(400) : res.send(response)



});


export default router;
