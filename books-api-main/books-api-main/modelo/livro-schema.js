const banco = require('./conexao');

const livroSchema = new banco.Schema({
  _id: {
    type: banco.Schema.Types.ObjectId,
    default: () => new banco.Types.ObjectId(),
  },
  titulo: {
    type: String,
    required: true,
  },
  codEditora: {
    type: Number,
    required: true,
  },
  resumo: {
    type: String,
    required: true,
  },
  autores: {
    type: [String],
    required: true,
  },
});

const livros = banco.model('livros', livroSchema);

module.exports = livros;