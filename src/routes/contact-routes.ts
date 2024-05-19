import { Router } from 'express';
import * as contactController from '../controllers/contact-controller';

const router = Router();

router.post('/contacts', contactController.createContact);
router.get('/contacts/:id', contactController.getContactById);
router.put('/contacts/:id', contactController.updateContact);
router.delete('/contacts/:id', contactController.deleteContact);

export default router;
