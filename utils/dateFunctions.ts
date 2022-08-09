import { formatDistanceToNow } from 'date-fns';
import { es } from "date-fns/locale";


export const getFormatDistanceToNow = ( date: number ) => {

    const fromNow = formatDistanceToNow( date, { locale: es } );
    // const fromNow = formatDistanceToNow( new Date(date), { addSuffix: true, locale: es  } );  

    return fromNow;
}
    