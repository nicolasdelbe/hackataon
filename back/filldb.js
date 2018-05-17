const characters = require('./characters')

let sql

for (let i = 0; i < characters.length; i++) {
  sql += `INSERT INTO users (id, name, gender, image, species) VALUES ('${characters[i].id}', '${characters[i].name}', '${characters[i].gender}',​ '${characters[i].image}', '${characters[i].species}');`
}

module.exports = 'characters'
