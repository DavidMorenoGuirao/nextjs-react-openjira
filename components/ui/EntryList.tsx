import { List, Paper } from "@mui/material"
import React, { useContext, useMemo } from "react"
import { EntriesContext } from "../../context/entries"
import { UIContext } from "../../context/ui"
import { EntryStatus } from "../../interfaces"
import { EntryCard } from "./"

import styles from "./EntryList.module.css"


interface Props{
    status: EntryStatus
}

export const EntryList: React.FC<Props> = ({ status }) => {
    
    const { entries, updateEntry } = useContext( EntriesContext );

    const { isDragging, endDragging } = useContext( UIContext );

    //sobre el useMemo, esto lo que hace es que solo se "renderice" cuando cambien las "entries"
    const entriesByStatus = useMemo(() => entries.filter( entry => entry.status === status ), [ entries ]) 

    const allowDrop = ( event: React.DragEvent<HTMLDivElement> ) =>{
        event.preventDefault();
    }
    
    const onDropEntry = (event: React.DragEvent<HTMLDivElement> ) => {
        const id = event.dataTransfer.getData('txt');
        
        const entry = entries.find( e => e._id === id )!;
        entry.status = status;
        updateEntry( entry );
        endDragging();
        
    }
    

    return (
        //TOD:Aqui haremos drop
        <div
            onDrop={ onDropEntry }
            onDragOver={ allowDrop }
            className={ isDragging ? styles.dragging : '' }
        >
            <Paper sx={{ height: 'calc(100vh - 180px)', overflow: 'auto', backgroundColor: 'transparent', padding: '1px 5px'}}>

                {/* TODO: cambiará dependiendo dsi esta haciendo drag o no  */}
                <List sx={{ opacity: isDragging ? 0.3 : 1, transition:'all .3s' }}>
                    {
                        entriesByStatus.map( entry => (
                            <EntryCard key={ entry._id } entry={ entry } />
                        ))
                    }
                    
                </List>
            </Paper>
        </div>
    )
}







//Usamos un DIV porque necesoitamos una de sus propiedades, la cual no la tiene, por ejemplo, el grid o el Box, etc...