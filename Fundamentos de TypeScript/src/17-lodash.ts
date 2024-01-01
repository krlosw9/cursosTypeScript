//Esta es una libreria sin soporte typescript de forma nativa
//Entonces importamos el soporte de tipos que el ecosistema de typescript ofrece
import _ from 'lodash';

const data = [
  {
    username: 'Nicolas',
    role: 'admin'
  },
  {
    username: 'Valentina',
    role: 'seller'
  },
  {
    username: 'zulema',
    role: 'seller'
  },
  {
    username: 'Santiago',
    role: 'customer'
  },
]

const rta = _.groupBy(data, (item) => item.role)

console.log(rta);

