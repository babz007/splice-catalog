import express from 'express';
import { ViewController } from '../controllers/ViewController';
import multer from 'multer';

const viewController = new ViewController();

const router = express.Router();

const upload = multer({ dest: '/tmp' });

router.get('/', viewController.homeView);
router.post('/upload', upload.single('file'), viewController.uploadPost);
router.get('/upload', viewController.uploadView);
router.post('/item', viewController.itemView);

export default router;
