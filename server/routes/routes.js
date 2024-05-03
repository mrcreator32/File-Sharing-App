import express from 'express';
import { uploadImage, downloadImage } from '../controller/controller.js'; // Importing named export
const router = express.Router();
import upload from '../utils/upload.js';


router.post('/upload',upload.single('file'), uploadImage);

router.get('/file/:fileId',downloadImage);

export default router;
