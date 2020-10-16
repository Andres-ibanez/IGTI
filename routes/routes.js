/* 
Nesse arquivo nos vamos desenvolver o sistema de rotas da nosa api, quando ela apontar /transaction
*/

const express = require("express");
const transactionRouter = express.Router();

transactionRouter.get("/", async (req, res) => {
  const { query } = req;
  try {
    //Verifica se o parametro esta chegando
    if (!query.period) {
      throw new Error("Precisa pasar o parametro 'period' no formato yyyy-mm");
    }

    //Verificação minima para o parametro
    if(period.length !==7){
      throw new Error("Period invalido use o formato yyyy-mm");
    }

    res.send({
      message: "Bem-vindo",
      transactions: [ 'trans1', 'trans2'] 
    });
  } catch ({ message }) {
    res.status(400).send({ error: message });
  }
});

transactionRouter.post("/", async (req, res) => {
  const { body } = req;
  try {
    //Verifica se o body esta chegando
    if (JSON.stringify(body) === '{}') {
      throw new Error("Não existe o conteudo");
    }

    res.send({
      status: "OK"
    });
  } catch ({ message }) {
    res.status(400).send({ error: message });
  }
});

transactionRouter.put("/", async (req, res) => {
  try {
    throw new Error("Id não existe");
  } catch ({ message }) {
    res.status(400).send({ error: message });
  }
});

transactionRouter.put("/:id", async (req, res) => {
  const { body, params } = req;
  try {
    //Verifica se o body esta chegando
    if (JSON.stringify(body) === '{}') {
      throw new Error("Não existe o conteudo");
    }

    res.send({
      status: "OK"
    });
  } catch ({ message }) {
    res.status(400).send({ error: message });
  }
});

transactionRouter.delete("/", async (req, res) => {
  try {
    throw new Error("Id não existe");
  } catch ({ message }) {
    res.status(400).send({ error: message });
  }
});

transactionRouter.delete("/:id", async (req, res) => {
  const { params } = req;
  try {
    //Verifica se o body esta chegando
    res.send({
      status: "OK"
    });
  } catch ({ message }) {
    res.status(400).send({ error: message });
  }
});

module.exports = transactionRouter;
