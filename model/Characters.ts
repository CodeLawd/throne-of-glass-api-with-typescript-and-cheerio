import { Schema, model } from 'mongoose';

const characterSchema = new Schema({
  name: { type: String },
  species: { type: String },
  image: { type: String },
});

const Characters = model('Character', characterSchema);

export default Characters;
