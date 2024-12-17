import {Router} from 'express';
import {getHomePage} from '../../controller/homePage.js';

const router = Router();

router.get('/', getHomePage);

export default router;