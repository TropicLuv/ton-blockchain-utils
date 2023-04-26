import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import * as middlewares from './middlewares';
import api from './api';
import createWallet from './api/ton/create-wallet'
import transfer from './api/ton/transfer'
import balance from './api/ton/balance'

import deployMinter from './api/jetton/deployMinter'
import jettonMint from './api/jetton/jettonMint'


import createCollection from './api/nft/collection/create'

import createNftItem from './api/nft/item/create'
import sendNftItem from './api/nft/item/send'


import MessageResponse from './interfaces/MessageResponse';

require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

// app.get<{}, MessageResponse>('/', (req, res) => {
//   res.json({
//     message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
//   });
// });

app.use('/api/v1/', api);
app.use('/api/v1/ton', createWallet);
app.use('/api/v1/ton', transfer);
app.use('/api/v1/ton', balance);
app.use('/api/v1/ton/jetton', deployMinter);
app.use('/api/v1/ton/jetton', jettonMint);
app.use('/api/v1/nft/collection', createCollection);
app.use('/api/v1/nft/item', createNftItem);
app.use('/api/v1/nft/item', sendNftItem);









app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
