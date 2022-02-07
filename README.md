
# Throne of Glass API

This is the Throne of Glass API built with [Typescript](https://www.typescriptlang.org/), 
[Mongoose](https://mongoosejs.com/) and [Cheerio](https://cheerio.js.org/). 
This was done by scrapping data from https://throneofglass.fandom.com/. 
The name of each character, their species and their image were extracted.
This was then populated into our mongodb database.

Don't forget to set up MongoDB database.

NOTE: This project would be hosted on heroku soon so you can make a 
request directly from the url.



## Run Locally

Clone the project

```bash
  git clone git@github.com:CodeLawd/throne-of-glass-api-with-typescript-and-cheerio.git
```

Go to the project directory

```bash
  cd throne-of-glass-api-with-typescript-and-cheerio
```

Install dependencies

```bash
  npm install or yarn install
```

Start the server

```bash
  npm run dev
```

Run the seed file (used to populate the database)

```bash
  npm run seed:db
```


## API Reference

#### Get all items

```http
  GET /api/characters
```



#### Get item

```http
  GET /api/characters/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


