import React, { useContext, useEffect } from 'react'
import DataContext from '../../context/DataContext';

function Interview() {
    const { handleHead } = useContext(DataContext);
    useEffect(() => {
        handleHead("Interviewtasks")

    },[])
    return (
       
        <section>
           
            <div className="p-3 colortitle text-center">Content available after completing Placement preparation</div>
        </section>
    )
}

export default Interview