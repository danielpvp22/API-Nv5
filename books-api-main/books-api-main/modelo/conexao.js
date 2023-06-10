const banco = require('mongoose');
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

banco.connect('mongodb+srv://root:root@livraria.y851uig.mongodb.net/livraria?retryWrites=true&w=majority', options);

module.exports = banco;