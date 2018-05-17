let sqlite = require('sqlite')
const characters = require('./characters')
let db = sqlite.open('./database.sqlite', { Promise })
// for (let i = 0; i < characters.length; i++) {
//   console.log(i)
//   let sql = `INSERT INTO users (id, name, gender, image, species) VALUES ("${characters[i].id}", "${characters[i].name}", "${characters[i].gender}", "${characters[i].image}", "${characters[i].species}");`
//   db.then(_db => _db.run(sql))
// }
