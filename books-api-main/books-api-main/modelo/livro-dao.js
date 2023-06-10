const livroModel = require('./livro-schema');

const obterLivros = async () => {
  return livroModel.find();
};

const incluir = async (livro) => {
  return livroModel.create(livro);
};

const excluir = async (_id) => {
  return livroModel.deleteOne(_id);
};

module.exports = {
  obterLivros,
  incluir,
  excluir,
}