import { Request, Response } from 'express';

import Characters from '../model/Characters';

const addNewCharacter = async (req: Request, res: Response) => {
  try {
    const character = await Characters.create(req.body);
    character.save(() => {
      return res.status(201).json(character);
    });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const getAllCharacters = async (req: Request, res: Response) => {
  try {
    const characters = await Characters.find({});
    if (characters.length <= 0) {
      return res.status(404).json({
        message: 'No characters found',
        characters: null,
      });
    }

    return res.status(200).json({
      data: characters.length,
      characters,
    });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const getSingleCharacter = async (req: Request, res: Response) => {
  try {
    const character = await Characters.find({ _id: req.params.id });

    if (character.length <= 0) {
      return res.status(404).json({
        message: 'No characters found',
        characters: null,
      });
    }

    return res.status(200).json({ character });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

export { getAllCharacters, addNewCharacter, getSingleCharacter };
