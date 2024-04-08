import React, { useContext, useEffect } from 'react';
import "./requirements.css";
import DataContext from '../../context/DataContext';

const Requirements = () => {

    const { handleHead} = useContext(DataContext);
 
    useEffect(() => {
        handleHead("Requirements")

    },[])
    return (
        <section>
          
    
            <div className="p-3 colortitle text-center">Content available after completing Placement preparation</div>
        </section>
    )
}

export default Requirements;