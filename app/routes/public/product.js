import {Router} from 'express';
import {getProductPage} from '../../controller/homePage.js';

const router = Router();

router.get('/', getProductPage);

export default router;