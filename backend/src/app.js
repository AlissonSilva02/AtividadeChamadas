import 'dotenv/config.js';
import express from 'express';
import cors from 'cors';

import adicionarRotas from './rotas.js';

const servidor = express();
servidor.use(cors());

adicionarRotas(servidor);

const PORTA=process.env.PORTA;
servidor.listen(PORTA, () => console.log(`--> Api subiu na porta 3131`));