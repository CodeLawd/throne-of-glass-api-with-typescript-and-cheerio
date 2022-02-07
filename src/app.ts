import express, { Request, Response } from 'express';

import '../config/db'
import characterRoute from "../routes/Character"

const app = express();
app.use(express.json())

app.use("/", characterRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('App is running on local port ' + PORT));
