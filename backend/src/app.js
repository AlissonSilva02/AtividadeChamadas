import 'dotenv/config.js';
import express from 'express';
import cors from 'cors';

const servidor = express();

servidor.use(express.json());
servidor.use(cors());

import adicionarRotas from './rotas.js';

adicionarRotas(servidor);

const PORTA=process.env.PORTA;
servidor.listen(PORTA, () => console.log(`--> Api subiu na porta ${PORTA}`));