import React, { useContext } from 'react'
import { useRouter } from 'next/router';
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'

import { UIContext } from '../../context/ui';
import { Entry } from '../../interfaces'
import { dateFunctions } from '../../utils';


interface Props {
    entry: Entry;
}

export const EntryCard: React.FC<Props> = ({ entry }) => {

    const { startDragging, endDragging} = useContext( UIContext );
    const router = useRouter();

    const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        // TODO: Modificar el estado para indicar que estoy haciendo drag
                
        event.dataTransfer.setData('txt', entry._id)
        startDragging();
    }

    const onDragEnd = () => {
        //TODO: Cancelar el drag
        endDragging();
    }

    const onClick = () => {
        router.push(`/entries/${entry._id}`);
    }	
    

  return (
    <Card
        onClick={ onClick }
        sx={{ marginBottom: 1}}
        //Eventos de drag
        draggable
        onDragStart={ onDragStart }
        onDragEnd={ onDragEnd }
    >
        <CardActionArea>
            <CardContent>
                <Typography sx={{whiteSpace: 'pre-line'}}>{ entry.description }</Typography>
            </CardContent>

            <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2, fontStyle:'italic'}}>
                <Typography variant='body2'>{ dateFunctions.getFormatDistanceToNow( entry.createdAt )}</Typography>
            </CardActions>
        </CardActionArea>
    </Card>
  )
}
