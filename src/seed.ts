import cheerio from 'cheerio';
import axios from 'axios';
import Characters from '../model/Characters';

const getCharacterPageNames = async () => {
  const url =
    'https://throneofglass.fandom.com/wiki/Category:Kingdom_of_Ash_characters';

  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const categories = $('ul.category-page__members-for-char');

  const characterPageName: Array<string> = [];

  for (let i = 0; i < categories.length; i++) {
    const ul = categories[i];
    const characterList = $(ul).find('li.category-page__member');

    for (let j = 0; j < characterList.length; j++) {
      const list = characterList[j];
      const path =
        $(list).find('a.category-page__member-link').attr('href') || '';
      const name = path.replace('/wiki/', '');
      characterPageName.push(name);
    }
  }

  return characterPageName;
};

const getCharacterInfo = async (characterName: string) => {
  const url = `https://throneofglass.fandom.com/wiki/${characterName}`;
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);

  let name = $("h2[data-source='name']").text();
  const species = $(
    "div[data-source='species'] > div.pi-data-value.pi-font"
  ).text();
  const image = $('a.image.image-thumbnail > img').attr('src');

  if (!name) {
    name = characterName.replace('_', ' ');
  }

  const characterInfo: object = {
    name,
    species,
    image,
  };

  return characterInfo;
};

const loadCharacters = async () => {
  const characterPageNames = await getCharacterPageNames();

  const characterInfoPromises = characterPageNames.map((characterName) =>
    getCharacterInfo(characterName)
  );
  const characters = await Promise.all(characterInfoPromises);

  characters.forEach((character) => {
    const saveCharacters = new Characters(character);
    saveCharacters.save(() => console.log('Database has been populated'));
  });
};

// getCharacterPageNames();
loadCharacters();
