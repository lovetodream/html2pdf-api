import express from 'express';
import { htmlToPdfController } from './../controllers/htmlToPdfController';

const router = express.Router();

router.post('/', htmlToPdfController.create);

export default router;
