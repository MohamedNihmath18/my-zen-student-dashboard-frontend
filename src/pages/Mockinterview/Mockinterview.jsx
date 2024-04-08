import React, { useContext, useEffect } from 'react'
import DataContext from '../../context/DataContext';

function Mockinterview() {
    const { handleHead} = useContext(DataContext);


    useEffect(() => {
        handleHead("Mock-interview")
    },[])
    return (
        <section>
            <div className="p-3 colortitle text-center">Mock interwiew not Assigned</div>
        </section>
    )
}

export default Mockinterview