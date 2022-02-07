import express, { Router } from 'express';
const router: Router = express.Router();

import {
  getAllCharacters,
  addNewCharacter,
  getSingleCharacter,
} from '../controllers/Character';

router.route('/api/characters').get(getAllCharacters).post(addNewCharacter);
router.route('/api/characters/:id').get(getSingleCharacter);

export default router;
