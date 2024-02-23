const express = require("express");
const cors = require("cors");
const router = require("./routes");

const app = express();

const port = process.env.PORT || 3003;
app.use(cors());
app.use(express.json());

app.use(router);

app.listen(port, () => console.log(`Magic happens on port ${port}`));
