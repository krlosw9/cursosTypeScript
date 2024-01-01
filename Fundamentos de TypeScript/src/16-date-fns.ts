//Importamos libreria date-fns la cual tiene soporte typescript
import {subDays, format} from 'date-fns'

const date = new Date(1998, 1, 28); //28 de febrero 1998
const rta = subDays(date, 30);
const str = format(rta, 'yyyy/MM/dd');

console.log(str);
