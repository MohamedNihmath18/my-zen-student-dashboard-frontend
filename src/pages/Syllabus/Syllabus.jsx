import React, { useContext, useEffect } from 'react'
import syllsbusPdf from "../../assets/mern-syllabus.pdf";
import "./syllabus.css";
import DataContext from '../../context/DataContext';

function Syllabus() {
    const { handleHead} = useContext(DataContext);


    useEffect(() => {
        handleHead("Syllabus")
    },[])
  return (
    <section className='syllabus'>
    <div className="syllabus__container col-10 col-lg-6 border border-2">
        <div className='doc'>
            <div className="doc__title">
                Course
            </div>
            <div className='mt-3 colortitle'>FSD-MERN</div>
          
        </div>
    
        <div>
         
            <div className='doc__title '>Syllabus
           
            </div>
            <div className='mt-3'> 
                <a href={syllsbusPdf} download="" className='text-primary'>
                Download </a> </div>
        </div>
    </div>
</section>
  )
}

export default Syllabus