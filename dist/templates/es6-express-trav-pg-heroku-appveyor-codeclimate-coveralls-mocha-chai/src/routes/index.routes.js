import express from 'express';
import { sampleVariable } from '../settings';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => res.status(200).json({ message: sampleVariable }));
indexRouter.get('/users');

export default indexRouter;
