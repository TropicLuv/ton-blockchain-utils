const TonWeb = require('tonweb');
const { API } = require("../config")

export const tonweb = new TonWeb(new TonWeb.HttpProvider('https://testnet.toncenter.com/api/v2/jsonRPC'), { apiKey: API })