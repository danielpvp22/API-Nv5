const express = require('express');
const { 
  obterLivros, 
  incluir, 
  excluir
} = require('../modelo/livro-dao');

const router = express.Router();

router.get('/', async (_request, response, next) => {
  const livros = await obterLivros();

  response.status(200).json(livros);
});

router.post('/', async (request, response, next) => {
  try {
    const livro = request.body;

    const includedBook = await incluir(livro);

    response.status(201).json({
      success: true,
      book: includedBook,
    });
  } catch(err) {
    next(err);
  }
});

router.delete('/:_id', async (request, response, next) => {
  try {
    const _id = request.params;

    const { deletedCount } = await excluir(_id);

    if (deletedCount === 0) {
      response.status(404).json({ success: false, message: 'No docs matched the filter' });
    }

    response.status(200).json({ success: true });
  } catch(err) {
    next(err);
  }
});

module.exports = router;