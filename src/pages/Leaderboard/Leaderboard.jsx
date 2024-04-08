import React, { useContext, useEffect } from 'react'
import { leaderBoardData } from '../../Data';
import "./leaderboard.css";
import DataContext from '../../context/DataContext';

function Leaderboard() {
    const { handleHead} = useContext(DataContext);


    useEffect(() => {
        handleHead("Leaderboard")
    },[])

  return (
    <section className='leaderboard'>
            <div className="leader__leaderboard p-3  ">
               
                <img src="https://www.zenclass.in/Icons/leader.svg" className=' img-fluid float-end mb-2'/>
                <h2 className='fonttitle mt-3'>Competition is a good thing; it forces us to do our best.</h2>
               
            </div>
            
            <div className="leader__leaderboard__table">
                <table >
                    <thead>
                        <tr className='p-2 text-center text-md-start mb-2 border border-1'>
                            <th className='text-center'>Rank</th>
                            <th className='text-center'>Name</th>
                            <th className='text-center'>Batch</th>
                            <th className='text-center'>Learning</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            leaderBoardData.map((data) => {
                                return data.rank === 1 ?
                                    (
                                        <tr key={data.rank} className="topper p-2 text-center text-md-start mb-2 rounded">
                                            <td className='px-3 text-center'>{data.rank}</td>
                                            <td className='text-center' >{data.name}</td>
                                            <td  className='text-center'>{data.batch}</td>
                                            <td  className='text-center'>{data.learning}</td>
                                        </tr>
                                    ) :
                                    (
                                        <tr key={data.rank} className="p-2 text-center text-md-start rounded">
                                            <td className='px-3 text-center'>{data.rank}</td>
                                            <td  className='text-center'>{data.name}</td>
                                            <td  className='text-center'>{data.batch}</td>
                                            <td  className='text-center'>{data.learning}</td>
                                        </tr>
                                    )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </section>
  )
}

export default Leaderboard