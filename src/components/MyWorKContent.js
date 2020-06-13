import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom'


const MyWorkContent= () =>{
    return(
        <div className="work_container" >
            <NavLink className="work_link" to='/posters'>Posters</NavLink>
            <NavLink className="work_link" to='/UserInteraction'>User <br/><span className="work_small">Interaction</span></NavLink>
            <NavLink className="work_link" to='/3D-option'>3D Art</NavLink>
        </div>

    )
}

export default MyWorkContent