/* 
Nesse arquivo nos vamos desenvolver o sistema de rotas da nosa api, quando ela apontar /transaction
*/

const express = require("express");
const transactionRouter = express.Router();

transactionRouter.get("/", async (req, res) => {
  const { query } = req;
  try {
    if (!query.period) {
      throw new Error("precisa pasar o parametro 'period' no formato yyyy-mm");
    }
    res.send({
      message: "Bem-vindo",
      transactions: [ 'trans1', 'trans2'] 
    });
  } catch ({ message }) {
    res.status(400).send({ error: message });
  }
});

module.exports = transactionRouter;
