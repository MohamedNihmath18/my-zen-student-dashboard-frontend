import React, { useContext, useEffect } from 'react';
import DataContext from '../../context/DataContext';


const Application = () => {
    const { handleHead } = useContext(DataContext);
    useEffect(() => {
        handleHead("Application")

    },[])

    return (
        <section>
            <div className="p-3 colortitle text-center">Content available after completing Placement preparation</div>
        </section>
    )
}

export default Application;