import React, { useContext, useEffect } from 'react'
import DataContext from '../../context/DataContext';

function Certificate() {
    const { handleHead} = useContext(DataContext);


        useEffect(() => {
            handleHead("Certificate")
        },[])

    return (
        <section>
            <div className="p-3 colortitle text-center">Your Certificates are not yet Generated</div>
        </section>
    )
}

export default Certificate