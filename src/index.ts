import express from 'express';
import { Request, Response } from "express";

import { heroeRoutes } from './heroe.route';
import { dbConnection } from '../db-config';

const port = 3000;
const app = express();

app.use(express.json());

dbConnection();

app.get('/', (req: Request, res: Response) => {
    try {
		res.status(201).json({
			message: "Running",
		});
	} catch (error) {
		res.status(500).json({
			message: "Error",
			error,
		});
	}
});

app.use('/heroe', heroeRoutes);

app.listen(port, () => {
    console.log(`Running in port ${port}!`);
});