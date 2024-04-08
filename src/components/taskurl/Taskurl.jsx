import React from 'react';
 
import { FaExternalLinkAlt } from 'react-icons/fa';
import "./taskurl.css"
const TaskUrl = ({ item }) => 
{
    console.log(item);
    return (
        <div>
            {
                item.frontEndCode &&
                <h6>
                    <a href={item.frontEndCode} rel="noreferrer" target='_blank' className='task__url' >
                        Front End Code <FaExternalLinkAlt />
                    </a>
                </h6>
            }
            {
                item.frontEndURL &&
                <h6>
                    <a href={item.frontEndURL} rel="noreferrer"  target='_blank' className='task__url' >
                        Front End Depolyed URL <FaExternalLinkAlt />
                    </a>
                </h6>
            }
            {
                item.backEndCode &&
                <h6>
                    <a href={item.backEndCode} rel="noreferrer"  target='_blank' className='task__url' >
                        Back End Code <FaExternalLinkAlt />
                    </a>
                </h6>
            }
            {
                item.backEndURL &&
                <h6>
                    <a href={item.backEndURL} rel="noreferrer"  target='_blank' className='task__url' >
                        Back End Depolyed Code <FaExternalLinkAlt />
                    </a>
                </h6>
            }
            <div className='task__score'>
                Task Score : - {item.score}
            </div>
        </div>
    )
}

export default TaskUrl
